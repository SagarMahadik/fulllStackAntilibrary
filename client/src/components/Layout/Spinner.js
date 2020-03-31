/**
 * Spinner.js
 * Spinner svg component to be diplayed while loading
 * Future scope: SVG book style loader with theme
 */

import React, { Fragment } from 'react';
import { LoaderContainer } from '../../styles/applicationStyles/appComponents';

const Spinner = () => (
  <LoaderContainer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: 'auto' }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="19"
        fill="none"
        stroke="#13dfc0"
        strokeDasharray="89.5353906273091 31.845130209103033"
        strokeWidth="10"
        transform="rotate(312.004 50 50)"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  </LoaderContainer>
);

export default Spinner;
