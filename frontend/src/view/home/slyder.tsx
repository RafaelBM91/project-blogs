import * as React from "react";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { SectionML, SlyderML } from "../../mangoLy";
//Styled-Components
import { Slyder1Container, ContainerTitle } from "./slyderStyled";
//Image
import img1 from "../img/slyder/1.png";
import img2 from "../img/slyder/2.png";
import img3 from "../img/slyder/3.png";
import img4 from "../img/slyder/4.png";
import img5 from "../img/slyder/5.svg";
import img6 from "../img/slyder/6.png";
import img7 from "../img/slyder/7.png";
import img8 from "../img/slyder/8.jpg";
import img9 from "../img/slyder/9.png";
import img10 from "../img/slyder/10.png";
import img11 from "../img/slyder/11.png";
import img12 from "../img/slyder/12.png";
import img13 from "../img/slyder/13.png";
import img14 from "../img/slyder/14.png";
import img15 from "../img/slyder/15.png";
import img16 from "../img/slyder/16.png";
import img17 from "../img/slyder/17.png";
import img18 from "../img/slyder/18.png";
import img19 from "../img/slyder/19.png";
import img20 from "../img/slyder/20.png";
import img21 from "../img/slyder/21.png";
import img22 from "../img/slyder/22.png";
import img23 from "../img/slyder/23.png";
import img24 from "../img/slyder/24.png";
import img25 from "../img/slyder/25.png";
import img26 from "../img/slyder/26.png";
import img27 from "../img/slyder/27.png";
import img28 from "../img/slyder/28.png";
import img29 from "../img/slyder/29.png";
import img30 from "../img/slyder/30.svg";
import img31 from "../img/slyder/31.png";

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
              <img src={img20} alt="empresa" />
              <img src={img2} alt="empresa" />
              <img src={img3} alt="empresa" />
              <img src={img27} alt="empresa" />
              <img src={img5} alt="empresa" />
              <img src={img7} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
        <SlyderML.Card>
          <Slyder1Container>
            <div>
              <img src={img29} alt="empresa" />
              <img src={img25} alt="empresa" />
              <img src={img26} alt="empresa" />
              <img src={img27} alt="empresa" />
              <img src={img12} alt="empresa" />
              <img src={img30} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
        <SlyderML.Card>
          <Slyder1Container>
            <div>
              <img src={img23} alt="empresa" />
              <img src={img28} alt="empresa" />
              <img src={img16} alt="empresa" />
              <img src={img31} alt="empresa" />
              <img src={img18} alt="empresa" />
              <img src={img19} alt="empresa" />
            </div>
          </Slyder1Container>
        </SlyderML.Card>
      </SlyderML>
    </SectionML.Center>
  );
};

export default SlyderComponent;
