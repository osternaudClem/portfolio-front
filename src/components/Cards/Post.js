import React from 'react';
import { Link } from 'react-router-dom';

const CardPost = ({ post }) => {
  return (
    <div>
      <h2>
        <Link to={`/articles/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.plaintext.substring(0, 120) + '...'}</p>
    </div>
  );
};

export default CardPost;
