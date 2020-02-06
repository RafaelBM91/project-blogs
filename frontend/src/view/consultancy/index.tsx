import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML, CardML } from "../../mangoLy";
//Components
import Nav from "../nav";
//Styled-Components
import { SectionContainerText, Sausage } from "../home/SectionStyled";
import {
  PaddigContainer,
  UlContainer,
  OlContainer,
  PageContainer
} from "../evaluations/indexStyled";
//Imagen
import img3 from "../img/home/sectionHomeImg3.svg";
import iconV from "../img/evaluations/iconV.svg";

//Interface
export interface ConsultancyProps {}

const IconV = () => <img src={iconV} alt="" />;

const Consultancy: React.SFC<ConsultancyProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let consultancy = languageConfig[language].consultancy;

  return languageConfig[language] ? (
    <PageContainer>
      <SectionML no100vh={true} img={img3} to4050={true} bgColor="#FAFAFA">
        <CardML>
          <PaddigContainer>
            <SectionContainerText>
              <Sausage />
              <h2>{consultancy.title1}</h2>
              <p>{consultancy.text1}</p>
              <UlContainer>
                {consultancy.li.map((d: any, i: number) => (
                  <li key={i}>
                    <IconV />
                    {d}
                  </li>
                ))}
              </UlContainer>
              {/* <OlContainer>
                <h4>Differentiators</h4>
                <li>More than 35 White Hat Certified Hackers </li>
                <li>
                  We understand customer business logic to detect critical
                  points.{" "}
                </li>
                <li>Free retesting in each evaluation. </li>
                <li>Competitive price.</li>
              </OlContainer> */}
            </SectionContainerText>
          </PaddigContainer>
        </CardML>
      </SectionML>
    </PageContainer>
  ) : null;
};

export default Consultancy;
