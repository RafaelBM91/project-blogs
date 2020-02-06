import * as React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";

//Mango-Library
import ContainerML from "../../mangoLy/layout/container";

//Styled-Components
const SectionSC = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${MQ.md} {
    justify-content: space-between;
    min-height: ${props => (props.no100vh ? "auto" : "80vh")};
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`;
const ContainerComponent = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  margin-bottom: 30px;
  @media ${MQ.sm} {
    width: 60%;
  }
  @media ${MQ.md} {
    width: 50%;
    margin-bottom: 0;
  }
`;
const ContainerChildren = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  margin-bottom: 30px;
  @media ${MQ.sm} {
    width: 60%;
  }
  @media ${MQ.md} {
    width: 40%;
    margin-bottom: 0;
  }
`;
const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Section2(props) {
  const {
    children,
    bgImgM,
    bgImgD,
    reverse,
    title,
    component,
    no100vh,
    bgColor
  } = props;
  return (
    <ContainerML
      bgImgM={bgImgM}
      bgImgD={bgImgD}
      no100vh={no100vh}
      bgColor={bgColor}
    >
      <ContainerTitle>{title || null}</ContainerTitle>
      <SectionSC reverse={reverse} no100vh={no100vh}>
        <ContainerComponent>{component}</ContainerComponent>
        <ContainerChildren>{children}</ContainerChildren>
      </SectionSC>
    </ContainerML>
  );
}
export default Section2;
