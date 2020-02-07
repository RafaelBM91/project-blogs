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
        <Particles
          params={{
            particles: {
              number: {
                value: 75,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
      </ContainerParticles>
      {children}
    </ContainerAll>
  );
};

export default BgParticles;
