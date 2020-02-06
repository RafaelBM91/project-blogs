import * as React from "react";
import { withRouter } from "react-router-dom";
//Mango-Library
import { ButtonML, SectionML } from "../../mangoLy";
//Styled-Components
import {
  HomeSectionTitle,
  SectionContainerText,
  Sausage
} from "./SectionStyled";
//Imagen
import img1 from "../img/home/sectionHomeImg1.svg";
import img2 from "../img/home/sectionHomeImg2.svg";
import img3 from "../img/home/sectionHomeImg3.svg";
//Context
import { LanguageContext } from "../../context/language";

//interface
export interface SectionHomeProps {
  history: any;
}

const SectionHome: React.SFC<SectionHomeProps> = props => {
  const { history } = props;
  const { languageConfig, language } = React.useContext(LanguageContext);
  let section = languageConfig[language].home.section;
  function historyPush(url: string) {
    history.push(url);
    window.scrollTo(0, 0);
  }
  const SectionTitle = () => (
    <HomeSectionTitle>
      <h3>{section.title1}</h3>
      <h2>
        {section.title2}
        <span>{section.span}</span>
      </h2>
    </HomeSectionTitle>
  );

  return languageConfig[language] ? (
    <>
      <SectionML img={img1} title={<SectionTitle />} no100vh={true}>
        <SectionContainerText>
          <Sausage />
          <h2>{section.section[0].title}</h2>
          <p>{section.section[0].p}</p>
          <ButtonML
            curvature={true}
            color="#2A93F0"
            onClick={() => historyPush("/evaluations")}
          >
            {section.button}
          </ButtonML>
        </SectionContainerText>
      </SectionML>
      <SectionML img={img2} reverse={true} no100vh={true}>
        <SectionContainerText>
          <Sausage />
          <h2>{section.section[1].title}</h2>
          <p>{section.section[1].p}</p>
          <ButtonML
            curvature={true}
            color="#2A93F0"
            onClick={() => historyPush("/monitoring")}
          >
            {section.button}
          </ButtonML>
        </SectionContainerText>
      </SectionML>
      <SectionML img={img3} no100vh={true}>
        <SectionContainerText>
          <Sausage />
          <h2>{section.section[2].title}</h2>
          <p>{section.section[2].p}</p>
          <ButtonML
            curvature={true}
            color="#2A93F0"
            onClick={() => historyPush("/consultancy")}
          >
            {section.button}
          </ButtonML>
        </SectionContainerText>
      </SectionML>
    </>
  ) : null;
};

export default withRouter(SectionHome);
