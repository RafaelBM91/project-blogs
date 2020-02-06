import React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";

//Mango-Library
import Container from "../layout/container";

//Styled-Components
const HeaderSC = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: auto;
  @media ${MQ.sm} {
    height: 100%;
  }
  & > div {
    /* border: 1px solid green; */
  }
`;
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  @media ${MQ.md} {
    width: 75%;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

function Header2(props) {
  const { children, headerImg, bgImgM, bgImgD, no100vh, bgColor } = props;
  return (
    <Container
      bgImgM={bgImgM}
      bgImgD={bgImgD}
      no100vh={no100vh || false}
      bgColor={bgColor}
    >
      <HeaderSC>
        <ContainerText>{children}</ContainerText>
        <ContainerImg>
          <img src={headerImg} alt="logo" />
        </ContainerImg>
      </HeaderSC>
    </Container>
  );
}
export default Header2;
