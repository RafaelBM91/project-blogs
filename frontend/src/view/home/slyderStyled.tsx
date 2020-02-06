import styled from "styled-components";
import { MQ } from "../../config/media";

export const Slyder1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    img {
      margin: 0 10px 20px;
      width: 100px;
      @media ${MQ.sm} {
        width: 10%;
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
    font-size: 38px;
  }
  span {
    font-weight: 700;
  }
`;
