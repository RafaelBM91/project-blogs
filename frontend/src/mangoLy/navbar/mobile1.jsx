import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { MQ } from "../../config/media";

const NavContainer = styled.div`
  position: fixed;
  background: ${props => props.bgColor};
  z-index: 40;
  top: 0px;
  right: 0px;
  width: calc(100% - 20vw);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
`;
const ContainerLogo = styled.div`
  height: 25px;
`;
const ContainerModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: ${props => (props.viewModalNav ? "0" : "-100%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: left 0.3s;
`;
const ContainerModalNan = styled.div`
  background: #2c3e50;
  height: auto;
  width: 250px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow-y: scroll;
`;
const OtherDiv = styled.div`
  height: 100vh;
  width: calc(100% - 300px);
`;

const UlMobileNav = styled.ul`
  padding: 20px 30px;
  margin: 0;
  list-style: none;
  li {
    width: 100%;
    padding: 20px 0px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media ${MQ.md} {
      font-size: 18px;
    }
  }
`;
const ContainerHamburger = styled.div`
  /* background: #2C3E50; */
  svg {
    filter: drop-shadow(1px 1px 2px #2c3e50);
  }
`;
const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" fill="white" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
const Mobile1 = props => {
  const { data, history, bgColor, children, logoImg } = props;
  const [viewModalNav, setViewModalNav] = useState(false);
  function historyPush(url) {
    history.push(url);
    window.scrollTo(0, 0);
    setViewModalNav(false);
  }
  return (
    <NavContainer bgColor={bgColor}>
      <ContainerLogo>
        <span onClick={() => historyPush("/")}>
          <img src={logoImg} alt="logo" />
        </span>
      </ContainerLogo>
      <ContainerHamburger onClick={() => setViewModalNav(true)}>
        <Hamburger />
      </ContainerHamburger>

      <ContainerModal viewModalNav={viewModalNav}>
        <ContainerModalNan>
          <UlMobileNav>
            {data.map((dato, i) =>
              dato.other ? (
                <li key={i} onClick={() => window.open(dato.url)}>
                  {dato.text}
                </li>
              ) : (
                <li key={i} onClick={() => historyPush(dato.url)}>
                  {dato.text}
                </li>
              )
            )}
          </UlMobileNav>
          {children}
        </ContainerModalNan>
        <OtherDiv onClick={() => setViewModalNav(false)}></OtherDiv>
      </ContainerModal>
    </NavContainer>
  );
};

export default withRouter(Mobile1);
