import * as React from "react";
import { HeaderML } from "../../mangoLy";

//Components
import SectionHome from "./Section";
import CardContainer from "./card";
import VideoComponents from "./video";
import SlyderComponent from "./slyder";
import AccordionComponent from "./accordion";
import FormComponent from "./form";
import FooterComponent from "./footer";

//Components
import BgParticles from "../../components/particles";
import Nav from "../nav";
//Styled-Components
import { TextHeader, FormContainer } from "./indexStyled";
//Image
import imgHeader from "../img/home/imgHeader.svg";
//Context
import { LanguageContext } from "../../context/language";
export interface HomeProps {
  languageContext: {
    language: string;
    languageConfig: {};
  };
}

const Home: React.SFC<HomeProps> = props => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  return languageConfig[language] ? (
    <>
      <BgParticles header={true}>
        <HeaderML.Center
          no100vh={true}
          headerImg={imgHeader}
          // bgColor={"#364048"}
        >
          <TextHeader>
            <h1>{languageConfig[language].home.header.title1}</h1>
            <p>
              {languageConfig[language].home.header.title2}
              <br />
              {languageConfig[language].home.header.title3}
            </p>
          </TextHeader>
        </HeaderML.Center>
      </BgParticles>

      <SectionHome />

      <BgParticles>
        <article>
          <VideoComponents />
        </article>
      </BgParticles>

      <CardContainer />

      <SlyderComponent />

      <BgParticles>
        <article id="FAQS">
          <AccordionComponent />
        </article>
      </BgParticles>

      <FormContainer>
        <FormComponent />
      </FormContainer>

      <FooterComponent />
    </>
  ) : null;
};

export default Home;
