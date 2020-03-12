import styled from "styled-components";
import { MQ } from "../../config/media";
export const ContainerTitleSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    margin: 0;
    margin-bottom: 7px;
    font-size: 20px;
    @media ${MQ.sm} {
      font-size: 40px;
      margin-bottom: 25px;
    }
    @media ${MQ.md} {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
  h2 {
    color: white;
    margin: 0;
    font-weight: 400;
    margin-bottom: 30px;
    font-size: 16px;
    @media ${MQ.sm} {
      margin-bottom: 50px;
      font-size: 35px;
    }
    @media ${MQ.md} {
      margin-bottom: 50px;
      font-size: 34px;
    }
    span {
      font-weight: 700;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
