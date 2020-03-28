import * as React from 'react';

import { MiddleGradinetContainer } from '../../../styles/componentStyles/FancyItem/FancyItemTopContainer/fancyItemMiddleGradient';
function SvgComponent(props) {
  return (
    <MiddleGradinetContainer>
      <svg width={375} height={100} viewBox="0 0 105.03 26.458" {...props}>
        <defs>
          <linearGradient id="prefix__a">
            <stop offset={0} stopColor="#338000" />
            <stop offset={1} stopColor="#333" />
          </linearGradient>
          <linearGradient
            xlinkHref="#prefix__a"
            id="prefix__b"
            x1={76.439}
            y1={27.86}
            x2={75.95}
            y2={47.357}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.49896 0 0 .59447 .113 267.301)"
          />
          <filter id="prefix__c" colorInterpolationFilters="sRGB">
            <feConvolveMatrix
              order="3 3"
              kernelMatrix="0 -0.15 0 -0.15 1.6 -0.15 0 -0.15 0"
              divisor={1}
              in="SourceGraphic"
              targetX={1}
              targetY={1}
            />
          </filter>
        </defs>
        <path
          d="M-.02 295.938c7.228-36.834 90.658 18.249 105.018-20.972l-.112 19.513c0 5.154-89.946-1.736-104.094 1.04l-.05.01c-.553.108-.768.442-.763.41z"
          transform="matrix(.99322 0 0 .9527 .828 -256.512)"
          fill="url(#prefix__b)"
          stroke="#000"
          strokeWidth={0}
          filter="url(#prefix__c)"
        />
      </svg>
    </MiddleGradinetContainer>
  );
}

export default SvgComponent;
