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
  PageContainer
} from "../evaluations/indexStyled";
//Imagen
import img2 from "../img/home/sectionHomeImg2.svg";
import iconV from "../img/evaluations/iconV.svg";

//Interface
export interface MonitoringProps {}
const IconV = () => <img src={iconV} alt="" />;

const Monitoring: React.SFC<MonitoringProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let monitoring = languageConfig[language].monitoring;

  return languageConfig[language] ? (
    <PageContainer>
      <SectionML no100vh={true} img={img2} to4050={true} bgColor="#FAFAFA">
        <CardML>
          <PaddigContainer>
            <SectionContainerText>
              <Sausage />
              <h2>{monitoring.title1}</h2>
              <p>{monitoring.text1}</p>
              <UlContainer>
                {monitoring.li.map((d: any, i: number) => (
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

export default Monitoring;
