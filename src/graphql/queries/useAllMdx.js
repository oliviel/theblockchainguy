import { graphql, useStaticQuery } from 'gatsby';

export const useAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date , order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
          }
          timeToRead
        }
      }
    }
  `);

  return data.allMdx;
};
