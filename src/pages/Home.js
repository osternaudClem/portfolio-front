import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { getPostBySlug } from '../lib/blogUtils.js';
import Projects from '../datas/projects';
import pageStyles from './Page.scss';
// Components
import { Loading } from '../components/Loading';
import { CardProject } from '../components/Cards';
import { Intro } from '../components/Intro';

class HomePage extends Component {
  // Render methods
  _renderIntro() {
    const { users } = this.props;

    if (!users || users.length === 0) {
      return <Loading />;
    }

    const User = getPostBySlug('clement', users);

    return <Intro user={User} />;
  }

  _renderAbout() {
    const { pages } = this.props;

    if (!pages || pages.length === 0) {
      return <Loading />;
    }

    const About = getPostBySlug('about', pages);

    return renderHTML(About.html);
  }

  _renderProjects(in_progress) {
    return (
      <div>
        {Projects.filter(project => project.in_progress === in_progress).map(
          project => (
            <CardProject project={project} key={`project-${project.slug}`} />
          )
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this._renderIntro()}
        <div className={pageStyles.Page}>
          <h1>About me</h1>
          {this._renderAbout()}
          <h2>Here are some of my projects...</h2>
          {this._renderProjects(false)}
          <h2>...I'm working on.</h2>
          {this._renderProjects(true)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pages: state.blog.pages,
    users: state.user.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
