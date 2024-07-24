// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'RixInooAriDuriR';
        src: url('/fonts/RixInooAriDuriR.woff2') format('woff2'),
             url('/fonts/RixInooAriDuriR.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'RixInooAriDuriR', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
