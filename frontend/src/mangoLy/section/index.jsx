import * as React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";

//Mango-Library
import ContainerML from "../../mangoLy/layout/container";
import Section2 from "./sectionComponent";
import SectionCenter from "./center";

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
  & > div {
    width: 100%;
    /* border: 1px solid red; */
    @media ${MQ.md} {
      width: ${props => (props.to4050 ? "45%" : "40%")};
    }
  }
  img {
    width: 100%;
    /* border: 1px solid green; */
    margin-bottom: 30px;
    @media ${MQ.sm} {
      width: 60%;
    }
    @media ${MQ.md} {
      width: ${props => (props.to4050 ? "45%" : "50%")};
      margin-bottom: 0;
    }
  }
`;
const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Section1(props) {
  const {
    children,
    img,
    bgImgM,
    bgImgD,
    reverse,
    title,
    bgColor,
    no100vh,
    to4050
  } = props;
  return (
    <ContainerML
      bgImgM={bgImgM}
      bgImgD={bgImgD}
      bgColor={bgColor}
      no100vh={no100vh}
    >
      <ContainerTitle>{title || null}</ContainerTitle>
      <SectionSC reverse={reverse} no100vh={no100vh} to4050={to4050 || false}>
        <img src={img} alt="" />
        <div>{children}</div>
      </SectionSC>
    </ContainerML>
  );
}
Section1.type2 = Section2;
Section1.Center = SectionCenter;
export default Section1;
