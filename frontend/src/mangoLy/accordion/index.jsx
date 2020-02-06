import React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";

//Image
import sum from "./sum.svg";
import subtraction from "./subtraction.svg";

const ContainerAcoordion = styled.div`
  background: white;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
const TitleSC = styled.h2`
  color: #2c3e50;
  padding: 20px 35px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  @media ${MQ.md} {
    font-size: 20px;
  }

  span {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 10px;
      margin-left: 10px;
      @media ${MQ.md} {
        margin-left: 20px;
        width: 20px;
      }
    }
    img:nth-child(1) {
      display: ${props => (props.viewAcoordion ? "none" : "block")};
    }
    img:nth-child(2) {
      display: ${props => (props.viewAcoordion ? "block" : "none")};
    }
  }
`;
const TextSC = styled.div`
  max-height: ${props => (props.viewAcoordion ? "500px" : "0px")};
  transition: max-height 0.5s;
  overflow: hidden;
  p,
  ul {
    margin: 0;
    color: #6c7d8d;
    padding: 10px 15px;
    width: calc(100% - 30px);
    font-size: 10px;
    @media ${MQ.md} {
      font-size: 16px;
      width: calc(100% - 70px);
      padding: 20px 35px 20px 35px;
    }
  }
  ul {
    padding-left: 30px;
    width: calc(100% - 45px);
    @media ${MQ.md} {
      padding-left: 55px;
      width: calc(100% - 90px);
    }
  }
`;

const Acoordion1 = props => {
  const { title, text, view, setView } = props;
  // const [viewAcoordion, setViewAcoordion] = React.useState(false);
  return (
    <ContainerAcoordion>
      <TitleSC viewAcoordion={view}>
        <span onClick={() => setView()}>
          {title}
          <img src={sum} alt="icon" />
          <img src={subtraction} alt="icon" />
        </span>
      </TitleSC>
      <TextSC viewAcoordion={view}>{text}</TextSC>
    </ContainerAcoordion>
  );
};

export default Acoordion1;
