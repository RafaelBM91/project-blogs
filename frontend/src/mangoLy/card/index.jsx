import React from "react";
import styled from "styled-components";
import CardHeader from "./header";
import CardBody from "./body";
import CardImg1 from "./img1";
import CardImg2 from "./img2";
import CardImg3 from "./img3";
import Container from "./cardContainer";

const CardContainerSC = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 100%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

function Card({ children }) {
  return <CardContainerSC>{children}</CardContainerSC>;
}
Card.Container = Container;
Card.header = CardHeader;
Card.Body = CardBody;
Card.Img1 = CardImg1;
Card.Img2 = CardImg2;
Card.Img3 = CardImg3;
export default Card;
