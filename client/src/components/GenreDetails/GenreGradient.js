/**
 * GenreGradient.js
 * SVG elemet used for the genre
 * Future scope - Image to be added at the bottom left hand side
 */

import * as React from 'react';
import { SVGUniqueID } from 'react-svg-unique-id';

import {
  GenreStop,
  GenreStop1
} from '../../styles/componentStyles/GenreDetails/genreDetails';

function SvgComponent(props) {
  return (
    <SVGUniqueID>
      <svg width={250} height={200.378} viewBox="0 0 92.704 53.017" {...props}>
        <defs>
          <radialGradient
            xlinkHref={`#${props.genreName}__a`}
            id={`${props.genreName}__b`}
            cx={-428.286}
            cy={25.74}
            fx={-428.286}
            fy={25.74}
            r={46.352}
            gradientTransform="matrix(-.81297 -1.42269 1.99784 -1.14162 -241.802 -509.53)"
            gradientUnits="userSpaceOnUse"
          />
          <linearGradient id={`${props.genreName}__a`}>
            <GenreStop offset={0} stopOpacity={0.808} />
            <GenreStop1 offset={1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <rect
          width={92.604}
          height={52.917}
          x={65.201}
          y={70.403}
          ry={5.144}
          rx={4.76}
          fill={`url(#${props.genreName}__b)`}
          fillRule="evenodd"
          transform="translate(-65.15 -70.353)"
        />
      </svg>
    </SVGUniqueID>
  );
}

export default SvgComponent;
