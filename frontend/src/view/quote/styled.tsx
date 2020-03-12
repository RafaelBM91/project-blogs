import styled from "styled-components";

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  label {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    input {
      margin: 5px 10px;
      height: 20px;
      width: 20px;
      background: red;
    }
    pre {
      margin: 0;
    }
  }
`;
const hola = styled.div`
  align-items: center;
`;
