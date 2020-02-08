import gql from "graphql-tag";

export const CREATE_DIAGNOSTIG = gql`
  mutation newDiagnostic($input: createDiagnosticoInput) {
    createDiagnostico(input: $input) {
      diagnostico {
        name
        url
        email
        phone
      }
    }
  }
`;
