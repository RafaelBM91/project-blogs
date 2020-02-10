import * as React from "react";
import { LanguageContext } from "../../context/language";

// Mango-Ly
import { CardML } from "../../mangoLy";

//Styled-Components
import { HomeSectionTitle } from "./SectionStyled";
import { TextH3 } from "./cardStyled";

//image
import icon1 from "../img/home/cardIcon1.svg";
import icon2 from "../img/home/cardIcon2.svg";
import icon3 from "../img/home/cardIcon3.svg";
import icon4 from "../img/home/cardIcon4.svg";
import icon5 from "../img/home/cardIcon5.svg";
import icon6 from "../img/home/cardIcon6.svg";

export interface CardContainerProps {}
const CardContainer: React.SFC<CardContainerProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let card = languageConfig[language].home.card;
  const CardContainerTitle = () => (
    <HomeSectionTitle>
      <h3>{card.title1}</h3>
      <h2>
        {card.title2}
        <span>{card.span}</span>
      </h2>
    </HomeSectionTitle>
  );
  return languageConfig[language] ? (
    <>
      <CardML.Container
        gridColumns={3}
        gridGap="60px"
        title={<CardContainerTitle />}
      >
        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon4} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Fintech</TextH3>
          </CardML.Body>
        </CardML>
        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon2} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Retail</TextH3>
          </CardML.Body>
        </CardML>
        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon1} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Saas</TextH3>
          </CardML.Body>
        </CardML>
        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon6} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Enterprise</TextH3>
          </CardML.Body>
        </CardML>
        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon3} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Healthcare</TextH3>
          </CardML.Body>
        </CardML>

        <CardML>
          <CardML.header>
            <CardML.Img3 src={icon5} height="100px" />
          </CardML.header>
          <CardML.Body>
            <TextH3>Blockchain</TextH3>
          </CardML.Body>
        </CardML>
      </CardML.Container>
    </>
  ) : null;
};

export default CardContainer;
