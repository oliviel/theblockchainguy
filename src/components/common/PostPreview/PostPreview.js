import * as React from 'react';
import PropTypes from 'prop-types';

export const PostPreview = ({ post }) => (
  <article className="mb-10">
    <h1 className="capitalize font-bold text-3xl text-blue-300">
      {post.frontmatter.title}
    </h1>
    <p className="my-3">
      {post.frontmatter.date} • 👀
      <span className="ml-1">{post.timeToRead} min read</span>
    </p>
    <p className="text-xl">{post.frontmatter.description}</p>
  </article>
);

PostPreview.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.object,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    timeToRead: PropTypes.number,
  }).isRequired,
};
