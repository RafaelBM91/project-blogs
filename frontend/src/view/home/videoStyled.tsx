import styled from "styled-components";
import { MQ } from "../../config/media";

export const VideoContainerTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media ${MQ.md} {
    margin-bottom: 50px;
  }
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
      font-size: 24px;
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
      font-size: 38px;
    }
    span {
      font-weight: 700;
    }
  }
`;
export const VideoContainer = styled.div`
  iframe {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${MQ.md} {
    align-items: flex-start;
  }
  h2 {
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
    @media ${MQ.sm} {
      font-size: 60px;
      margin-bottom: 40px;
      line-height: 70px;
    }
    @media ${MQ.md} {
      text-align: left;
      font-size: 50px;
      margin-bottom: 40px;
      line-height: 50px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 0 26px;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      p {
        margin: 0;
      }
      @media ${MQ.sm} {
        font-size: 26px;
      }
      @media ${MQ.md} {
        font-size: 18px;
      }
      span {
        font-weight: 700;
        margin-left: 6px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        @media ${MQ.sm} {
          width: 30px;
          height: 30px;
          margin-right: 24px;
        }
      }
    }
  }
`;
