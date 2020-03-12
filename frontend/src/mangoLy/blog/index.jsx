import * as React from "react";
import styled from "styled-components";
import { MQ } from "../../config/media";

//Mango-Ly
import ContainerML from "../layout/container";

const ContainerBlog = styled.article`
  font-size: 16px;

  img {
    width: 100%;
    margin: 1em 0;
    @media ${MQ.sm} {
      width: 80%;
    }
    @media ${MQ.md} {
      width: 50%;
    }
  }
  h1 {
    font-size: 2.5em;
  }
`;

const ArticleBlog1 = props => {
  const { children, bgImgM, bgImgD, no100vh, bgColor, title } = props;
  return (
    <ContainerML
      bgImgM={bgImgM}
      bgImgD={bgImgD}
      no100vh={no100vh}
      bgColor={bgColor}
    >
      <div>{title}</div>
      <ContainerBlog>{children}</ContainerBlog>
    </ContainerML>
  );
};

export default ArticleBlog1;
