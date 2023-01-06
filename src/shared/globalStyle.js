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
    }
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    ::-webkit-scrollbar {
      display: none;
    } 
  }

 

  body, div, span, h1, h2, h3, h4, h5, h6,
  p, i, ol, ul, li, form, label, header, nav, 
  input, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
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

  .floating-button {
    padding-top: env(safe-area-inset-bottom);
  }
`;

export default GlobalStyles;
