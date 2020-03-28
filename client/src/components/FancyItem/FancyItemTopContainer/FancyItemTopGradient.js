/**
 * File Name : FancyItemTopGradient.js
 * SVG gradient for the "FancyItem" component
 * "ThemeProvider" from styled components to modify according to "Genre"
 * "Genre" value to be maintained in the state
 */

import React from "react";

import {
	Stop,
	Stop1
} from "../../../styles/componentStyles/FancyItem/FancyItemTopContainer/fancyItemTopGradient";

function Gradient(props) {
	return (
		<svg width={375} height={188} viewBox="0 0 105.833 52.917">
			<defs>
				<linearGradient id="prefix__a">
					<Stop offset={0} />
					<Stop1 offset={1} />
				</linearGradient>
				<linearGradient
					xlinkHref="#prefix__a"
					id="prefix__b"
					x1={-21.477}
					y1={280.503}
					x2={59.121}
					y2={237.98}
					gradientUnits="userSpaceOnUse"
				/>
			</defs>
			<path
				d="M.141 296.856c39.145-56.987 40.153 4.745 60.006-21.984 33.294-44.505 18.678 17.785 46.15-18.74l-.191-12.171-106.156.215z"
				fill="url(#prefix__b)"
				stroke="#000"
				strokeWidth={0}
				transform="translate(0 -244.083)"
			/>
		</svg>
	);
}

export default Gradient;
