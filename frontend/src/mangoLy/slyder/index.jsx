import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import SlyderCard from "./slyderCard";
import { MQ } from "../../config/media";

//Styled-Components
const Container1 = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  overflow: hidden;
  position: relative;
  height: ${props => props.heightM};
  @media ${MQ.sm} {
    height: ${props => props.heightT};
  }
  @media ${MQ.md} {
    height: ${props => props.heightD};
  }
`;

const Container2 = styled.div`
  width: 300%;
  /* border: 1px solid blue; */
  display: flex;
  position: absolute;
  top: 0;
  left: ${props => props.slyderPositionX};
  transition: left 0.3s;
  height: ${props => props.heightM};
  @media ${MQ.sm} {
    height: ${props => props.heightT};
  }
  @media ${MQ.md} {
    height: ${props => props.heightD};
  }
`;

const ContainerButtons = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
const CircleColor = styled.div`
  border-radius: 50%;
  margin: 0 5px;
  background: #d1d1d1;
  height: 10px;
  width: 10px;
  transform: scale(1);
  transition: transform 0.3s;
  ${props =>
    props.colorSC &&
    css`
      background: #2a93f0;
      transform: scale(1.5);
    `}
`;
const Slyder1 = props => {
  const { children, heightM, heightT, heightD } = props;
  const [current, setCurrent] = useState(0);
  const [slyderPositionX, setSlyderPositionX] = useState("0%");
  const initialColor = {
    color1: false,
    color2: false,
    color3: false
  };
  const [colorSlyder, setColorSlyder] = useState({
    color1: true,
    color2: false,
    color3: false
  });
  function handlePosition(positionX, color) {
    setSlyderPositionX(positionX);
    setColorSlyder({
      ...initialColor,
      [color]: true
    });
  }
  const handleNextSlyde = spx => {
    switch (spx) {
      case 1:
        handlePosition("0%", "color1");

        break;
      case 2:
        handlePosition("-100%", "color2");

        break;
      case 3:
        handlePosition("-200%", "color3");

        break;
      default:
        handlePosition("0%", "color1");
        console.log("slyder default");
    }
  };
  React.useEffect(() => {
    const next = current === 3 ? 1 : current + 1;
    handleNextSlyde(current);
    const id = setTimeout(() => setCurrent(next), 3000);
    // console.log("next", next, "current", current);
    return () => clearTimeout(id);
  }, [current]);
  return (
    <Container1
      heightM={heightM || "200px"}
      heightT={heightT || "200px"}
      heightD={heightD || "200px"}
    >
      <Container2
        slyderPositionX={slyderPositionX}
        heightM={heightM || "200px"}
        heightT={heightT || "200px"}
        heightD={heightD || "200px"}
      >
        {children}
      </Container2>
      <ContainerButtons>
        <CircleColor
          colorSC={colorSlyder.color1}
          onClick={() => setCurrent(1)}
        ></CircleColor>
        <CircleColor
          colorSC={colorSlyder.color2}
          onClick={() => setCurrent(2)}
        ></CircleColor>
        <CircleColor
          colorSC={colorSlyder.color3}
          onClick={() => setCurrent(3)}
        ></CircleColor>
      </ContainerButtons>
    </Container1>
  );
};

Slyder1.Card = SlyderCard;
export default Slyder1;
