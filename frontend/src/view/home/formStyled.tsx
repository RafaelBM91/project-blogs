import styled from "styled-components";
import { MQ } from "../../config/media";
export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    color: #2c3e50;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    margin-bottom: 10px;
    @media ${MQ.md} {
      font-size: 45px;
      line-height: 50px;
      margin-bottom: 0.5em;
      width: 100%;
      max-width: 370px;
    }
    span {
      font-weight: 700;
    }
  }
  h5 {
    font-weight: 400;
    color: #6c7d8d;
    font-size: 15px;
    line-height: 28px;
    margin: 0 0 30px;
    strong {
      font-weight: 700;
    }
    @media ${MQ.md} {
      font-size: 15px;
      width: 100%;
      max-width: 370px;
    }
  }
`;

export const BgColor = styled.div`
  background: linear-gradient(0deg, #364048 20%, #364048 20%, transparent 20%);
`;

export const SendOk = styled.div`
  width: 100%;
  @media ${MQ.md} {
    width: 370px;
  }
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export const ContainerImg = styled.div`
  /* border: 1px solid red; */
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 150px;
  }
`;
export const ContainerText = styled.div`
  /* border: 1px solid red; */
  height: 50%;
  width: 100%;
  h3 {
    text-align: center;
    color: #2c3e50;
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
    font-weight: 700;
    @media ${MQ.md} {
      font-size: 45px;
      line-height: 50px;
      /* margin-bottom: 0.5em; */
    }
  }
  p {
    text-align: center;
    font-weight: 400;
    color: #6c7d8d;
    font-size: 15px;
    line-height: 28px;
    margin: 0 0 30px;
    strong {
      font-weight: 700;
    }
    @media ${MQ.md} {
      font-size: 15px;
      width: 100%;
      max-width: 370px;
    }
  }
`;

export const InputSubmit = styled.input.attrs({ type: "submit" })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 35px;
  border-radius: 60px;
  height: 60px;
  outline: none;
  border: none;
  background: #0984e3;
  font-size: 16px;
  font-weight: 600;
  color: white;
  transition: transform 0.2s;
  margin-bottom: 0px;
  &:hover {
    transform: scale(1.03);
  }
  @media ${MQ.sm} {
    font-size: 16px;
  }
  @media ${MQ.md} {
    height: 60px;
    font-size: 16px;
    margin-bottom: 0px;
  }
`;
