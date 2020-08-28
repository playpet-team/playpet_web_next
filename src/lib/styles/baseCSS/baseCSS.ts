import { css } from '@emotion/core';
import normalize from './normalize';

const baseCSS = css`
  * {
    font-family: 'Metro Sans';
    box-sizing: border-box;
  }

  ${normalize};
`;

export default baseCSS;
