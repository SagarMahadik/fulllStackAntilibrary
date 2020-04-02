/**
 * File Name : genreFancyItemGradient.js
 * Styles the gradient according to the genre theme
 */

import styled from 'styled-components';
import { stopColor1 } from '../../applicationStyles/genreTheme';
import {
  viewbox,
  width,
  height,
  transform
} from '../../applicationStyles/deviceTheme';

export const Stop = styled.stop`
  stop-color: #333;
  stop-opacity: 0;
`;

export const Stop1 = styled.stop`
  stop-color: ${stopColor1};
`;

export const SVG = styled.svg`
  width: ${width};
  height: ${height};
`;

export const Path = styled.path`
  transform: ${transform};
`;
