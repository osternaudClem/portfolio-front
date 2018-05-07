import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostBySlug, cleanPost } from '../lib/blogUtils.js';
import pageStyles from './Page.scss';
// Components
import { ContentMarkdown } from '../components/Content';
import { Loading } from '../components/Loading';

class BlogArticlePage extends Component {
  // Render methods
  render() {
    const { posts } = this.props;
    const slug = this.props.match.params.slug;

    if (!posts || posts.length === 0) {
      return <Loading />;
    }

    const Post = cleanPost(getPostBySlug(slug, posts));

    return (
      <div className={pageStyles.Page}>
        <h1 className={pageStyles['Page__title']}>{Post.title}</h1>
        <div className={pageStyles['Page__meta']}>
          {Post.published_at}
        </div>
        <div className={pageStyles['Page__content']}>
        <ContentMarkdown content={Post.markdown} />
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogArticlePage);
