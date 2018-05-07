import React, { Component } from 'react';
import { connect } from 'react-redux';
import pageStyles from './Page.scss';
// Components
import { Loading } from '../components/Loading';
import { CardPost } from '../components/Cards';

class BlogPage extends Component {

  // Render methods
  renderPosts() {
    const { posts } = this.props;

    if (!posts || posts.length === 0) {
      return <Loading />;
    }

    return (
      <div>
        {posts.map(post => <CardPost post={post} key={`post-${post.id}`} />)}
      </div>
    );
  }

  render() {
    return <div className={pageStyles.Page}>{this.renderPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
