import * as React from "react";
import { Link } from "react-router-dom";

//Mango-Ly
import { CardML } from "../../mangoLy";
//Styled-Components
import { ContainerTextCartBlog } from "./indexStyled";
//Context
import { LanguageContext } from "../../context/language";
export interface CardBlogProps {
  data: any;
}

const CardBlog: React.SFC<CardBlogProps> = props => {
  const { data } = props;
  const { languageConfig, language } = React.useContext(LanguageContext);
  return (
    <CardML>
      <CardML.Img1 src={data.image.url} height="180px" />
      <CardML.Body>
        <ContainerTextCartBlog>
          {language === "es" ? (
            <>
              <div>{data.tages}</div>
              <h3>{data.titulo}</h3>
              <p>{data.descripcion}</p>
            </>
          ) : (
            <>
              <div>{data.tagen}</div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </>
          )}
          <Link to={`/blog/${data.url}`}>
            {language === "es" ? "Leer más" : "Read more"}
          </Link>
        </ContainerTextCartBlog>
      </CardML.Body>
    </CardML>
  );
};

export default CardBlog;
