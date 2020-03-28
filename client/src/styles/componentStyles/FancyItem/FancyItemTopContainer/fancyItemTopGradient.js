/**
 * File Name : fancyItemTopGradient.js
 * Styles the gradient according to the genre theme
 */

import styled from "styled-components";
import { stopColor1 } from "../../../applicationStyles/genreTheme";

export const Stop = styled.stop`
	stop-color: #333;
	stop-opacity: 0;
`;

export const Stop1 = styled.stop`
	stop-color: ${stopColor1};
`;
