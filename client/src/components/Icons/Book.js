import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={300} height={150} viewBox="0 0 92.704 53.017" {...props}>
      <defs>
        <radialGradient
          xlinkHref="#prefix__a"
          id="prefix__b"
          cx={-428.286}
          cy={25.74}
          fx={-428.286}
          fy={25.74}
          r={46.352}
          gradientTransform="matrix(-.81297 -1.42269 1.99784 -1.14162 -241.802 -509.53)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="prefix__a">
          <stop offset={0} stopColor="#34e89e" stopOpacity={0.808} />
          <stop offset={1} stopColor="#34e89e" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        fill="url(#prefix__b)"
        fillRule="evenodd"
        d="M65.201 70.403h92.604v52.917H65.201z"
        transform="translate(-65.15 -70.353)"
      />
    </svg>
  );
}

export default SvgComponent;
