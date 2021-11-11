import {createGlobalStyle} from "styled-components"
import PoppinsBold from "../fonts/Poppins-Bold.woff";
import PoppinsMedium from "../fonts/Poppins-Medium.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins-bold', sans-serif;
    src: url(${PoppinsBold}) format('woff2');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Poppins-medium', sans-serif;
    src: url(${PoppinsMedium}) format('woff2');
    font-weight: medium;
  }
  * {
    box-sizing: border-box;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
      margin: 0;
      padding: 0;
      background: ${props => props.theme.background};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      transition: 350ms ease-in-out;
  }
  #root {
      width: 298px;
      height: auto;
      box-shadow: ${props => props.theme.dropShadow};
      padding: 25px 0;
      border-radius: 20px;
      background: ${props => props.theme.calcBackground};
      transition: 350ms ease-in-out;
  }
`;

export default GlobalStyle