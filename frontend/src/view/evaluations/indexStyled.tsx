import styled from "styled-components";
import { MQ } from "../../config/media";

export const PaddigContainer = styled.div`
  padding: 10px 30px;
  @media ${MQ.md} {
    padding: 70px 48px;
  }
`;

export const UlContainer = styled.ul`
  padding: 0;
  width: 100%;
  list-style: none;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);
  @media ${MQ.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${MQ.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    margin-bottom: 15px;
    color: #6c7d8d;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: auto;
    @media ${MQ.sm} {
      font-size: 23px;
    }
    @media ${MQ.md} {
      font-size: 12px;
    }
    img {
      height: 20px;
      width: 20px;
      margin: 0;
      margin-right: 10px;
    }
  }
`;

export const OlContainer = styled.ol`
  padding: 0;
  width: 100%;
  h4 {
    color: #0d2336;
    font-size: 18px;
    @media ${MQ.sm} {
      font-size: 29px;
    }
    @media ${MQ.md} {
      font-size: 18px;
    }
  }
  li {
    margin-bottom: 15px;
    color: #6c7d8d;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: auto;
    @media ${MQ.sm} {
      font-size: 23px;
    }
    @media ${MQ.md} {
      font-size: 14px;
    }
  }
`;

export const PageContainer = styled.div`
  background: #fafafa;
  min-height: 100vh;
`;
