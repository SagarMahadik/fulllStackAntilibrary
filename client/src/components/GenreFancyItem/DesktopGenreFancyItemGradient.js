import * as React from 'react';

import {
  Stop,
  Stop1
} from '../../styles/componentStyles/GenreFancyItem/genreFancyItemGradient';

function SvgComponent(props) {
  return (
    <svg width={780} height={200} viewBox="0 0 206.375 52.917" {...props}>
      <defs>
        <linearGradient id="prefix__a">
          <Stop offset={0} />
          <Stop1 offset={1} />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={237.98}
          x2={59.121}
          y1={280.503}
          x1={-21.477}
          id="prefix__b"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path
        d="M.141 296.856c39.145-56.987 40.153 4.745 60.006-21.984 33.294-44.505 18.678 17.785 46.15-18.74l-.191-12.171-106.156.215z"
        fill="url(#prefix__b)"
        stroke="#000"
        strokeWidth={0.101}
        transform="matrix(1.94834 .0108 0 1.01435 -.16 -248.665)"
      />
    </svg>
  );
}

export default SvgComponent;
