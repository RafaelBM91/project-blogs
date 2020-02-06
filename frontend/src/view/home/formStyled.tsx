import styled from "styled-components";
import { MQ } from "../../config/media";
export const TitleForm = styled.div`
  text-align: center;
  h2 {
    color: #2c3e50;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin: 50px 0 22px;
    @media ${MQ.md} {
      font-size: 50px;
      margin-top: 50px;
      line-height: 50px;
    }
  }
  h5 {
    font-weight: 400;
    color: #6c7d8d;
    font-size: 10px;
    line-height: 28px;
    margin: 0 0 30px;
    strong {
      font-weight: 700;
    }
    @media ${MQ.md} {
      font-size: 18px;
    }
  }
`;

export const BgColor = styled.div`
  background: linear-gradient(0deg, #364048 20%, #364048 20%, transparent 20%);
`;

export const SendOk = styled.div`
  width: 100%;
  @media ${MQ.md} {
    width: 60%;
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
  height: 50%;
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
  }
  p {
    text-align: center;
    color: #2c3e50;
  }
`;

export const InputSubmit = styled.input.attrs({ type: "submit" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 60px;
  height: 35px;
  outline: none;
  border: none;
  background: #0984e3;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  transition: transform 0.2s;
  margin-bottom: 40px;
  &:hover {
    transform: scale(1.03);
  }
  @media ${MQ.sm} {
    width: 200px;
    font-size: 16px;
  }
  @media ${MQ.md} {
    height: 60px;
    width: 200px;
    font-size: 16px;
    margin-bottom: 70px;
  }
`;
