import * as React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";
//Mango-Library
import Container from "../layout/container";

const ContainerFormSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100%;
    @media ${MQ.sm} {
      width: ${props => props.width};
    }
  }
`;
const ContainerTitleSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
function SectionCenter(props) {
  const { children, bgImgM, bgImgD, title, no100vh, width, bgColor } = props;
  return (
    <Container
      bgImgM={bgImgM}
      bgImgD={bgImgD}
      no100vh={no100vh}
      bgColor={bgColor}
    >
      <ContainerTitleSC>{title}</ContainerTitleSC>
      <ContainerFormSC width={width || "70%"}>
        <div>{children}</div>
      </ContainerFormSC>
    </Container>
  );
}
export default SectionCenter;
