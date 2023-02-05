import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

    ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }
    @font-face {
    font-family: 'MaplestoryOTFLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }
    @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    //로컬폰트 임포트(에러메세지 떠서 주석처리함)
    /* @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: 
      url("../assets/font/Pretendard-Bold.woff2") format('woff2'),
      url("../assets/font/Pretendard-Bold.woff") format('woff');
    }
    @font-face {
    font-family: "Maplestory";
    font-weight: 700;
    src: url("../assets/font/Maplestory-Bold.woff") format('woff');
    }
    @font-face {
    font-family: "Maplestory";
    font-weight: 300;
    src: local("Maplestory-Light"),
      url("../assets/font/Maplestory-Light.woff") format('woff');
    } */

    ::-webkit-scrollbar {
      display: none;
    } 
  }

  html {
  font-size: 62.5%;
  }

  body, div, span, h1, h2, h3, h4, h5, h6,
  p, i, ol, ul, li, form, label, header, nav, 
  input, textarea, button {
    //overflow-x:hidden;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    -webkit-tap-highlight-color : rgba(0,0,0,0);

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
  }

  button:focus,
  button:active,
  textarea:focus,
  textarea:active,
  input:focus,
  input:active {
    box-shadow: none;
    outline: none;      
  }

  textarea {
  resize: none;
  }  

  input::placeholder {
    color: #cdcac6;
  }

  textarea::placeholder {
    color: #cdcac6;
  }

  .floating-button {
    padding-top: env(safe-area-inset-bottom);
  }

  
`;

export default GlobalStyles;
