import * as React from "react";
import { withRouter } from "react-router-dom";
import { LanguageContext } from "../../context/language";
//Mango-Ly
import { FooterML } from "../../mangoLy";
//Styled-Components
import { Text1, Text2, Text3, Text4, ContainerIcons } from "./footerStyled";
//image
import flag13 from "../img/home/footerFlag13.png";
import flag2 from "../img/home/footerFlag2.png";
import flag4 from "../img/home/footerFlag4.png";
import logo from "../img/home/footerLogo.svg";
import subLogo from "../img/home/footerSubLogo.svg";
import phone from "../img/home/footerPhone.svg";
import email from "../img/home/footerEmail.svg";
import twitter from "../img/home/footerTwitter.svg";
import linkedin from "../img/home/footerLinkedin.svg";
export interface FooterComponentProps {
  history: any;
}

const FooterComponent: React.SFC<FooterComponentProps> = props => {
  const { history } = props;
  const { languageConfig, language } = React.useContext(LanguageContext);
  let myFooter = languageConfig[language].home.footer;
  function historyPush(url: string) {
    history.push(url);
    window.scrollTo(0, 0);
  }
  return languageConfig[language] ? (
    <FooterML no100vh={true} bgColor="#364048">
      <FooterML.span3>
        <Text1>
          <img src={logo} alt="" />
          <p>{myFooter.text1}</p>
          <img src={subLogo} alt="" />
        </Text1>
      </FooterML.span3>
      <FooterML.span1></FooterML.span1>
      <FooterML.span2>
        <Text2>
          <div>
            <h3>{myFooter.title2}</h3>
            <ul>
              <li onClick={() => historyPush("/blog")}>{myFooter.li2[0]}</li>
              <li>
                <a href="#FAQS">{myFooter.li2[1]}</a>
              </li>
              <li onClick={() => historyPush("/quote")}>{myFooter.li2[2]}</li>
              <li onClick={() => historyPush("/free-diagnostic")}>
                {myFooter.li2[3]}
              </li>
              <li onClick={() => historyPush("/sos-assistance")}>
                {myFooter.li2[4]}
              </li>
            </ul>
          </div>
        </Text2>
      </FooterML.span2>
      <FooterML.span2>
        <Text2>
          <div>
            <h3>{myFooter.title3}</h3>
            <ul>
              <li>
                <img src={flag13} alt="" />
                {myFooter.li3[0]}
              </li>
              <li>
                <img src={flag2} alt="" />
                {myFooter.li3[1]}
              </li>
              <li>
                <img src={flag13} alt="" />
                {myFooter.li3[2]}
              </li>
              <li>
                <img src={flag4} alt="" />
                {myFooter.li3[3]}
              </li>
            </ul>
          </div>
        </Text2>
      </FooterML.span2>

      <FooterML.span4>
        <Text3>
          <div>
            <h3>{myFooter.title4}</h3>
            <ul>
              <li>
                <img src={phone} alt="icon" />
                <div>
                  <h5>{myFooter.li4[0]}</h5>
                  <a
                    href="https://api.whatsapp.com/send?phone=525551876769&text=Think%20I%20had%20been%20hacked&source=&data="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>+52 (55) 5187-6769</h2>
                  </a>
                </div>
              </li>
              <li>
                <img src={email} alt="icon" />
                <div>
                  <h5>{myFooter.li4[1]}</h5>
                  <h2>contact@deltaprotect.com</h2>
                </div>
              </li>
              <li>
                <ContainerIcons>
                  <a
                    href="https://twitter.com/DeltaProtect"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/delta-protect/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </ContainerIcons>
              </li>
            </ul>
          </div>
        </Text3>
      </FooterML.span4>
      <FooterML.span12>
        <Text4>
          <h4>{myFooter.text5[0]}</h4>
          <h4 onClick={() => historyPush("/privacy")}>{myFooter.text5[1]}</h4>
        </Text4>
      </FooterML.span12>
    </FooterML>
  ) : null;
};

export default withRouter(FooterComponent);
