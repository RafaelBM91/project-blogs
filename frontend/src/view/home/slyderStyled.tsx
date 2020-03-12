import styled from "styled-components";
import { MQ } from "../../config/media";

export const Slyder1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    img {
      margin: 0 10px 20px;
      max-width: 100px;

      filter: grayscale(100%);
      max-height: 50px;

      @media ${MQ.sm} {
        max-width: 10%;
      }
      @media ${MQ.md} {
        margin: 0 20px;
      }
    }
  }
`;

export const ContainerTitle = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-weight: 400;
  margin-bottom: 30px;
  font-size: 16px;
  text-align: center;
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
`;
