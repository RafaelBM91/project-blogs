import styled from "styled-components";
import { MQ } from "../../config/media";

interface iButtonNav {
  bgColor: string;
}
interface iView {
  view: boolean;
}
export const NavMobileDesktop = styled.div`
  & > :nth-child(1) {
    @media ${MQ.md} {
      display: none;
    }
  }
  & > :nth-child(2) {
    display: none;
    @media ${MQ.md} {
      display: block;
    }
  }
  height: 0;
  @media ${MQ.md} {
    height: 90px;
  }
`;

export const ContainerButtonsNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  list-style: none;
  li {
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    margin-left: 30px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
`;
export const ContainerDropDown = styled.li`
  display: flex;
  align-items: center;
  svg {
    margin-left: 15px;
  }
  ul {
    transform: scaleY(0);
    transition: transform 0.3s;
    transform-origin: top center;
    position: absolute;
    top: 110%;
    right: 10px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  &:hover ul {
    transform: scaleY(1);
  }
`;
// export const ContainerIndustries = styled.ul`
//   display: grid;
//   column-gap: 20px;
//   grid-template-columns: 1fr 1fr;
//   width: auto;
//   padding: 0;
//   li {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     font-size: 16px;
//     font-weight: bold;
//     color: #364048;
//     cursor: pointer;
//     margin: 0;
//     & > div {
//       width: 50px;
//       height: 50px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       & > div {
//         width: 20px;
//         height: 20px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         img {
//           height: 100%;
//         }
//       }
//     }
//   }
// `;
export const ContainerIndustries = styled.ul`
  width: auto;
  padding: 0;
  overflow: hidden;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding-right: 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #364048;
    &:hover {
      background: #f3f3f3;
    }
    & > div {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 100%;
        }
      }
    }
  }
`;
export const ContainerSolutions = styled.ul`
  width: auto;
  padding: 0;
  overflow: hidden;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding-right: 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #364048;
    &:hover {
      background: #f3f3f3;
    }
    & > div {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 100%;
        }
      }
    }
  }
`;
export const ContainerEnEs = styled.ul`
  transform: ${(props: iView) => (props.view ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top center;
  transition: transform 0.3s;
  position: absolute;
  top: 110%;
  right: 10px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 0;
  width: 60px;
  li {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    margin: 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #364048;
  }
`;

export const ButtonNav = styled.div`
  button {
    background: ${(props: iButtonNav) => props.bgColor};
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
    padding: 10px 35px;
    /* width: 180px; */
    display: flex;
    align-items: center;
    height: 44px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const ContainerImgNav = styled.div`
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const ContainerImgMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin: 30px 0px 30px 30px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

export const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
  }
`;
