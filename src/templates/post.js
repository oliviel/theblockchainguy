import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { Layout, CodeHighlight, SEO } from '../components/common';
import './post.css';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      timeToRead
      body
    }
  }
`;

const components = {
  pre: CodeHighlight,
};

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
    <h1 className="mt-12 capitalize font-bold text-4xl text-white">
      {post.frontmatter.title}
    </h1>
    <p className="my-3">
      {post.frontmatter.date} • 👀
      <span className="ml-1">{post.timeToRead} min read</span>
    </p>
    <section className="max-w-screen-sm mx-auto text-base	sm:text-lg mdx-container">
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </section>
  </Layout>
);

export default PostTemplate;
