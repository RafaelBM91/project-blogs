import styled from "styled-components";
import { MQ } from "../../config/media";

export const TextHeader = styled.div`
  color: white;
  text-align: center;
  h1 {
    font-size: 30px;
    margin-top: 41px;
    margin-bottom: 11px;
    @media ${MQ.sm} {
      font-size: 60px;
      margin-bottom: 30px;
    }
    @media ${MQ.md} {
      font-size: 45px;
      margin-top: 0;
      margin-bottom: 11px;
    }
    @media ${MQ.lg} {
      font-size: 55px;
      margin-top: 0;
      margin-bottom: 11px;
    }
  }
  p {
    font-size: 14px;
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    @media ${MQ.sm} {
      font-size: 25px;
    }
    @media ${MQ.md} {
      font-size: 15px;
    }
    @media ${MQ.lg} {
      font-size: 20px;
    }
  }
`;
export const FormContainer = styled.div`
  transform: translateY(3px);
`;
