import * as React from 'react';
import { Link } from 'gatsby';
import { Layout, PostPreview, SEO } from '../components/common';
import { useAllMdx } from '../graphql/queries';

const Home = () => {
  const { nodes: posts } = useAllMdx();

  return (
    <Layout>
      <SEO />
      <section>
        {posts.map((post) => (
          <Link to={`/${post.frontmatter.slug}`} key={post.frontmatter.slug}>
            <PostPreview post={post} />
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
