import { createGlobalStyle } from 'styled-components';

import colors from '../style/colors';
import { MIN_DEVICE_WIDTH } from '../style/mediaQueries';

/*
  place here global styles that requires usage of constants
 */

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-width: ${MIN_DEVICE_WIDTH};
  }

  body {
    background-color: ${colors.turquoise};
  }

  input::-ms-reveal {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.gallery};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.white};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.silver};
  }
`;

export default GlobalStyle;
