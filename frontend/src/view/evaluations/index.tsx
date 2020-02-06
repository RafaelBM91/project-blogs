import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML, CardML } from "../../mangoLy";
//Components
import Nav from "../nav";
//Styled-Components
import { SectionContainerText, Sausage } from "../home/SectionStyled";
import { PaddigContainer, UlContainer, PageContainer } from "./indexStyled";
//Imagen
import img1 from "../img/home/sectionHomeImg1.svg";
import iconV from "../img/evaluations/iconV.svg";

export interface EvaluationsProps {}

const IconV = () => <img src={iconV} alt="" />;

const Evaluations: React.SFC<EvaluationsProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let evaluations = languageConfig[language].evaluations;

  return languageConfig[language] ? (
    <PageContainer>
      <SectionML no100vh={true} bgColor="#FAFAFA" img={img1} to4050={true}>
        <CardML>
          <PaddigContainer>
            <SectionContainerText>
              <Sausage />
              <h2>
                {evaluations.title1}
                <br />
                {evaluations.title2}
              </h2>
              <p>{evaluations.text1}</p>
              <UlContainer>
                {evaluations.li.map((d: any, i: number) => (
                  <li key={i}>
                    <IconV />
                    {d}
                  </li>
                ))}
              </UlContainer>
            </SectionContainerText>
          </PaddigContainer>
        </CardML>
      </SectionML>
    </PageContainer>
  ) : null;
};

export default Evaluations;
