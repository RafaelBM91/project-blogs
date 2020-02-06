import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML, SlyderML } from "../../mangoLy";
//Styled-Components
import { Slyder1Container, ContainerTitle } from "./slyderStyled";
//Image
// import img1 from "../img/slyder/1.png";
import img2 from "../img/slyder/2.png";
import img3 from "../img/slyder/3.png";
import img4 from "../img/slyder/4.png";
import img5 from "../img/slyder/5.svg";

export interface SlyderComponentProps {}

const SlyderComponent: React.SFC<SlyderComponentProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let slyder = languageConfig[language].home.slyder;
  const Title = () => (
    <ContainerTitle>
      {slyder.title1}
      <strong>{slyder.span}</strong>
      {slyder.title2}
    </ContainerTitle>
  );
  return (
    <SectionML.Center no100vh={true} width="100%" title={<Title />}>
      <SlyderML heightM={"250px"} heightT={"100px"} heightD={"200px"}>
        <SlyderML.Card>
          <Slyder1Container>
            <div>
              <img src={img3} alt="empresa" />
              <img src={img2} alt="empresa" />
              <img src={img3} alt="empresa" />
              <img src={img4} alt="empresa" />
              <img src={img5} alt="empresa" />
              <img src={img3} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
        <SlyderML.Card>
          <Slyder1Container>
            <div>
              <img src={img3} alt="empresa" />
              <img src={img2} alt="empresa" />
              <img src={img3} alt="empresa" />
              <img src={img4} alt="empresa" />
              <img src={img5} alt="empresa" />
              <img src={img3} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
        <SlyderML.Card>
          <Slyder1Container>
            <div>
              <img src={img3} alt="empresa" />
              <img src={img2} alt="empresa" />
              <img src={img3} alt="empresa" />
              <img src={img4} alt="empresa" />
              <img src={img5} alt="empresa" />
              <img src={img3} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
      </SlyderML>
    </SectionML.Center>
  );
};

export default SlyderComponent;
