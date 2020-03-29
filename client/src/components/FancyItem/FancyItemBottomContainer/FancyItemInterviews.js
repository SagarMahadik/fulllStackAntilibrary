/**
 * FancyItemInterviews.js
 * Contains the component for the fancyitem's interview
 * Future scope create style like video thumbanail..Needs bit of thinking!!
 * Loading value from the state to be used
 */

import React, { useContext } from 'react';

import {
  ItemContainer,
  ItemDetails,
  ItemIcon,
  ItemName
} from '../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks';

import Spinner from '../../Layout/Spinner';
import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';

import { FaCouch } from 'react-icons/fa';

export default function FancyItemInterviews() {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { fancyItemDetails, loading } = genreFancyItemContext;

  const { interviews } = fancyItemDetails;

  if (interviews === undefined) {
    return <Spinner />;
  }

  if (interviews === null) {
    return null;
  }

  return (
    <ItemContainer>
      {interviews.map(interview => (
        <ItemDetails href={interview.interviewURL} target="_blank">
          <ItemIcon>
            <FaCouch size={24} />
          </ItemIcon>
          <ItemName>{interview.interviewName}</ItemName>
        </ItemDetails>
      ))}
    </ItemContainer>
  );
}
