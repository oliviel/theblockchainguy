exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.map(({ frontmatter: post }) => {
    actions.createPage({
      path: `/${post.slug}`,
      component: require.resolve('./src/templates/post.jsx'),
      context: {
        slug: post.slug,
      },
    });
  });
};
