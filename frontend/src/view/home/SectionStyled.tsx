import styled from "styled-components";
import { MQ } from "../../config/media";

export const HomeSectionTitle = styled.div`
  text-align: center;
  /* border: 1px solid red; */
  margin-bottom: 50px;
  @media ${MQ.md} {
    margin-bottom: 100px;
  }
  h3 {
    color: #8b9cac;
    font-weight: 400;
    margin: 0;
    margin-bottom: 7px;
    font-size: 20px;
    @media ${MQ.sm} {
      font-size: 40px;
      margin-bottom: 25px;
    }
    @media ${MQ.md} {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  h2 {
    color: #2c3e50;
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
      font-size: 38px;
    }
    span {
      font-weight: 700;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    img {
      height: 30px;
      margin: 20px;
      @media ${MQ.md} {
        margin: 0;
        height: 70px;
      }
    }
  }
`;

export const SectionContainerText = styled.div`
  color: #0d2336;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${MQ.md} {
    align-items: flex-start;
  }
  h2 {
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin: 0;
    margin-bottom: 10px;
    @media ${MQ.sm} {
      font-size: 52px;
      margin-bottom: 47px;
    }
    @media ${MQ.md} {
      font-size: 45px;
      line-height: 56px;
      margin-bottom: 47px;
    }
  }
  p {
    color: #6c7d8d;
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;
    @media ${MQ.sm} {
      font-size: 25px;
      line-height: 50px;
      margin-bottom: 47px;
    }
    @media ${MQ.md} {
      font-size: 16px;
      margin-bottom: 37px;
      line-height: 34px;
    }
  }
`;

export const Sausage = styled.div`
  background: #2a93f0;
  width: 25px;
  height: 5px;
  border-radius: 5px;
  margin-bottom: 36px;
`;
