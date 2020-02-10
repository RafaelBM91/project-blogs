import styled from "styled-components";
import { MQ } from "../../config/media";

export const Text1 = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 28px;
  text-align: center;
  @media ${MQ.md} {
    text-align: left;
    font-size: 12px;
  }
`;
export const Text2 = styled.div`
  display: flex;
  justify-content: center;
  div {
    color: white;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${MQ.md} {
      align-items: flex-start;
    }
    h3 {
      font-size: 2.17em;
      @media ${MQ.md} {
        font-size: 1.17em;
        margin-top: 0;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      li,
      a {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        list-style: none;
        margin: 15px 0;
        font-size: 21px;
        display: flex;
        align-items: center;
        @media ${MQ.md} {
          font-size: 14px;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 10px;
          filter: grayscale(40%) brightness(130%);
        }
      }
      a {
        margin: 0;
      }
    }
  }
`;
export const Text3 = styled.div`
  display: flex;
  justify-content: center;
  @media ${MQ.md} {
    justify-content: flex-end;
  }
  & > div {
    color: white;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${MQ.md} {
      align-items: flex-start;
    }
    a {
      text-decoration: none;
    }
    h3 {
      font-size: 2.17em;
      @media ${MQ.md} {
        font-size: 1.17em;
        margin-top: 0;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 15px 0;
        display: flex;
        align-items: center;
        img {
          margin-right: 11px;
          width: 20px;
          height: 20px;
        }
        h5 {
          font-weight: 400;
          margin: 0 0 2px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }
        h2 {
          margin: 0;
          font-weight: 700;
          font-size: 17px;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;
export const Text4 = styled.div`
  line-height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  @media ${MQ.md} {
    flex-direction: row;
    text-align: left;
    font-size: 12px;
  }
  h4 {
    margin: 0;
  }
  h4:nth-child(2) {
    @media ${MQ.md} {
      margin-left: 60px;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media ${MQ.md} {
    justify-content: flex-start;
  }
  img {
    height: 30px !important;
    width: 30px !important;
    margin-top: 30px;
    margin-right: 27px !important;
    margin-left: 27px !important;
    @media ${MQ.md} {
      margin-left: 0 !important;
    }
  }
`;
