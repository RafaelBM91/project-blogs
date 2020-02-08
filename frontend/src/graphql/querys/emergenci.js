import gql from "graphql-tag";

export const CREATE_EMERGENCI = gql`
  mutation newEmergenci($input: createEmergenciInput) {
    createEmergenci(input: $input) {
      emergenci {
        name
        url
        email
        phone
        company
        description
      }
    }
  }
`;
