/**
 * File Name : globalStyles.js
 * Collection of global style for the app
 */

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-size: 16px;
	max-width:375px;
	height:auto;
	background-color: #333333;
	color: white;
	box-sizing: border-box;
   margin: 0;
   padding: 0; 	
}
`;

export default GlobalStyle;
