import React from "react";
import { MQ } from "../../config/media";
import Particles from "react-particles-js";
import styled, { css } from "styled-components";

const ContainerAll = styled.div`
  position: relative;
  article {
    padding: 50px 0;
    @media ${MQ.md} {
      padding: 75px 0 75px;
    }
  }
`;
const ContainerParticles = styled.div`
  width: 100%;
  height: 100%;
  background: #364048;
  z-index: -10;
  position: absolute;
  clip-path: polygon(0px 5%, 100% 0px, 100% 95%, 0px 100%);
  @media ${MQ.sm} {
    clip-path: polygon(0px 5%, 100% 0px, 100% 95%, 0px 100%);
  }
  ${props =>
    props.header &&
    css`
      clip-path: polygon(0px 0px, 100% 0px, 100% 75%, 0px 85%);
      @media ${MQ.sm} {
        clip-path: polygon(0px 0px, 100% 0px, 100% 65%, 0px 75%);
      }
    `}
  div {
    height: 100%;
    canvas {
      width: auto;
      height: 100%;
      z-index: -5;
    }
  }
`;

const BgParticles = props => {
  const { children, header } = props;
  return (
    <ContainerAll>
      <ContainerParticles header={header || false}>
        <Particles />
      </ContainerParticles>
      {children}
    </ContainerAll>
  );
};

export default BgParticles;
