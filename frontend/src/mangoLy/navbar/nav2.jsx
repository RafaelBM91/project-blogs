import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//Components
import ContainerHeaderML from "../layout/containerHeader";

const NavContainer = styled.div`
  background: ${props => props.bgColor};
  position: ${props => (props.fixed ? "fixed" : "static")};
  width: 100%;
  z-index: 10;
`;
const NavSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;
const ImgNav = styled.img`
  cursor: pointer;
  height: 50px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

function NavBar2(props) {
  const { history, logoImg, children, bgColor, fixed } = props;

  function historyPush(url) {
    history.push(url);
    window.scrollTo(0, 0);
  }
  return (
    <NavContainer bgColor={bgColor} fixed={fixed || false}>
      <ContainerHeaderML>
        <NavSC>
          <div onClick={() => historyPush("/")}>
            <ImgNav src={logoImg} alt="logo" />
          </div>
          {children}
        </NavSC>
      </ContainerHeaderML>
    </NavContainer>
  );
}

export default withRouter(NavBar2);
