/**
 * FancyItemTopContainer.js
 * Component contains the FancyItemTopGradient, FAncyItemInformation and FancyItemMiddleGradient
 */

import React from 'react';
import { FancyItemTopPart } from '../../../styles/componentStyles/FancyItem/fancyItemContainer';

import FancyItemTopGradient from './FancyItemTopGradient';
import FancyItemMiddleGradient from './FancyItemMiddleGradient';
import FancyItemInformation from './FancyItemInformation';

export default function FancyItemTopContainer() {
  return (
    <FancyItemTopPart>
      <FancyItemTopGradient />
      <FancyItemInformation />
      <FancyItemMiddleGradient />
    </FancyItemTopPart>
  );
}
