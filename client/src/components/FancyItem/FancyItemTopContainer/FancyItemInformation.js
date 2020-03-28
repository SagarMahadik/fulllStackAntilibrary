/**
 * Function to select random quote from quotes array to be added
 */

import React, { useContext } from 'react';
import aynRand from '../../../img/antilibraryImages/ayn_rand1.jpg';
import {
  Image,
  FancyItemName,
  FancyItemQuote,
  FancyItemImageContainer,
  FancyItemInfoContainer
} from '../../../styles/componentStyles/FancyItem/FancyItemTopContainer/FancyItemInformation';

import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';

export default function FancyItemInformation() {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { fancyItemDetails } = genreFancyItemContext;

  const { profilePicture, firstName, lastName, quotes } = fancyItemDetails;

  console.log(quotes);
  return (
    <React.Fragment>
      <FancyItemInfoContainer>
        <FancyItemImageContainer>
          <Image src={profilePicture} />
        </FancyItemImageContainer>
        <FancyItemName>
          {firstName} {lastName}
        </FancyItemName>
        <FancyItemQuote>{quotes}</FancyItemQuote>
      </FancyItemInfoContainer>
    </React.Fragment>
  );
}
