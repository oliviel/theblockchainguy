import { graphql, useStaticQuery } from 'gatsby';

export const useProfileImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { regex: "/profile/" }) {
        id
        name
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return data.file;
};
