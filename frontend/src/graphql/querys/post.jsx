import gql from "graphql-tag";

export const FIND_POSTS = gql`
  {
    posts(where: { public: true }) {
      id
      title
      titulo
      image {
        url
      }
      description
      descripcion
      public
      url
      keywords
      palabrasclaves
      tages
      tagen
    }
  }
`;

export const FIND_URL_POST = url =>
  gql`
    {
      posts(where: { public: true, url: "${url}" }) {
        id
        title
        titulo
        image {
          url
        }
        description
        descripcion
        public
        url
        keywords
        palabrasclaves
        article
        articulo
        tages
        tagen
      }
    }
  `;
