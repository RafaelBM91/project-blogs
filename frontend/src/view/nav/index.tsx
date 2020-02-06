import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

//Mango-Ly
import { NavBarML } from "../../mangoLy";
//Styled-Components
import {
  NavMobileDesktop,
  ContainerButtonsNav,
  ContainerDropDown,
  ContainerIndustries,
  ContainerSolutions,
  ButtonNav,
  ImgContainer,
  ContainerImgMobile
} from "./indexStyled";

//image
import usa from "../img/navbar/usa.jpg";
import mx from "../img/navbar/mx.jpg";
import logo from "../img/navbar/logo.svg";
import icon1 from "../img/home/cardIcon1.svg";
import icon2 from "../img/home/cardIcon2.svg";
import icon3 from "../img/home/cardIcon3.svg";
import icon4 from "../img/home/cardIcon4.svg";
import icon5 from "../img/home/cardIcon5.svg";
import icon6 from "../img/home/cardIcon6.svg";

import icon7 from "../img/navbar/icon1.svg";
import icon8 from "../img/navbar/icon2.svg";
import icon9 from "../img/navbar/icon3.svg";

export interface iNavProps extends RouteComponentProps<any> {
  history: any;
  bgColor: string;
  languageContext?: any;
}

const IconV = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.295"
    height="8.068"
    viewBox="0 0 13.295 8.068"
  >
    <g
      id="Icon_-_Chevron"
      data-name="Icon - Chevron"
      transform="translate(0 0)"
    >
      <path
        id="Trazado_1475"
        data-name="Trazado 1475"
        d="M.214,7.164l5.916,5.917a.731.731,0,0,0,1.033,0l.69-.69a.731.731,0,0,0,0-1.032L3.166,6.647,7.855,1.936A.731.731,0,0,0,7.854.9l-.69-.69a.731.731,0,0,0-1.033,0L.214,6.131a.731.731,0,0,0,0,1.034Z"
        transform="translate(0 8.068) rotate(-90)"
        fill="rgba(255,255,255,1)"
      />
    </g>
  </svg>
);
const Nav = (props: iNavProps) => {
  const { history, bgColor, languageContext } = props;
  function historyPush(url: string) {
    history.push(url);
    window.scrollTo(0, 0);
  }
  const initialStateViewLink = {
    industries: false,
    solutions: false,
    enes: false
  };
  const { language, languageConfig } = languageContext;

  const handleLanguageToEs = () => {
    languageContext.setLanguage("es");
  };
  const handleLanguageToEn = () => {
    languageContext.setLanguage("en");
  };
  const handleToggleLanguage = () => {
    if (languageContext.language === "es") {
      handleLanguageToEn();
    } else {
      handleLanguageToEs();
    }
  };
  return (
    <NavMobileDesktop>
      <NavBarML.Mobile1
        logoImg={logo}
        bgColor={bgColor}
        data={[
          {
            text: "Home",
            url: "/"
          },
          {
            text: "Evaluations and Audits",
            url: "/evaluations"
          },
          {
            text: "Monitoring",
            url: "/monitoring"
          },
          {
            text: "Consultancy",
            url: "/consultancy"
          },
          {
            text: "Free Diagnostic",
            url: "/free-diagnostic"
          },
          {
            text: "SOS Assistance",
            url: "/sos-assistance"
          },
          {
            text: "Blog",
            url: "/blog"
          }
        ]}
      >
        <ContainerImgMobile>
          <img onClick={handleLanguageToEn} src={usa} alt="usa" />
          <img onClick={handleLanguageToEs} src={mx} alt="mx" />
        </ContainerImgMobile>
      </NavBarML.Mobile1>
      <NavBarML.type2 bgColor={bgColor} logoImg={logo} fixed={true}>
        <ContainerButtonsNav>
          <ContainerDropDown>
            {languageConfig[language].navbar.industries}
            <IconV />
            {/* <ContainerIndustries>
              <li>
                <img src={icon1} alt="icon" />
                Saas
              </li>
              <li>
                <img src={icon4} alt="icon" />
                Fintech
              </li>
              <li>
                <img src={icon2} alt="icon" />
                Retail
              </li>
              <li>
                <img src={icon5} alt="icon" />
                Blockchain
              </li>
              <li>
                <img src={icon3} alt="icon" />
                Healthcare
              </li>
              <li>
                <img src={icon6} alt="icon" />
                Enterprise
              </li>
            </ContainerIndustries> */}
            <ContainerIndustries>
              <li>
                <div>
                  <div>
                    <img src={icon1} alt="icon" />
                  </div>
                </div>
                Saas
              </li>
              <li>
                <div>
                  <div>
                    <img src={icon4} alt="icon" />
                  </div>
                </div>
                Fintech
              </li>
              <li>
                <div>
                  <div>
                    <img src={icon2} alt="icon" />
                  </div>
                </div>
                Retail
              </li>
              <li>
                <div>
                  <div>
                    <img src={icon5} alt="icon" />
                  </div>
                </div>
                Blockchain
              </li>
              <li>
                <div>
                  <div>
                    <img src={icon3} alt="icon" />
                  </div>
                </div>
                Healthcare
              </li>
              <li>
                <div>
                  <div>
                    <img src={icon6} alt="icon" />
                  </div>
                </div>
                Enterprise
              </li>
            </ContainerIndustries>
          </ContainerDropDown>

          <ContainerDropDown>
            {languageConfig[language].navbar.solutions.title}
            <IconV />
            <ContainerSolutions>
              <li onClick={() => historyPush("/evaluations")}>
                <div>
                  <div>
                    <img src={icon7} alt="icon" />
                  </div>
                </div>
                {languageConfig[language].navbar.solutions.list[0]}
              </li>
              <li onClick={() => historyPush("/monitoring")}>
                <div>
                  <div>
                    <img src={icon8} alt="icon" />
                  </div>
                </div>
                {languageConfig[language].navbar.solutions.list[1]}
              </li>
              <li onClick={() => historyPush("/consultancy")}>
                <div>
                  <div>
                    <img src={icon9} alt="icon" />
                  </div>
                </div>
                {languageConfig[language].navbar.solutions.list[2]}
              </li>
            </ContainerSolutions>
          </ContainerDropDown>
          {/* <li>Delta Unity</li>
                        <li>About us</li> */}

          <li>
            <ButtonNav bgColor="#0984E3">
              <button onClick={() => historyPush("/free-diagnostic")}>
                {languageConfig[language].navbar.freeDiagnostic}
              </button>
            </ButtonNav>
          </li>
          <li>
            <ButtonNav bgColor="#F4577B">
              <button onClick={() => historyPush("/sos-assistance")}>
                {languageConfig[language].navbar.sosAssistance}
              </button>
            </ButtonNav>
          </li>
          <li onClick={handleToggleLanguage}>
            <ImgContainer>
              {language === "es" ? (
                <img src={usa} alt="usa" />
              ) : (
                <img src={mx} alt="mx" />
              )}
            </ImgContainer>
          </li>
        </ContainerButtonsNav>
      </NavBarML.type2>
    </NavMobileDesktop>
  );
};

export default withRouter(Nav);
