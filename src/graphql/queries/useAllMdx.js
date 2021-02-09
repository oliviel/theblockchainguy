import { graphql, useStaticQuery } from 'gatsby';

export const useAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
