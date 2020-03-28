/**
 * FancyItemResearchPapers.js
 * Contains the researh papers of technical fancyitems
 * Future scope: Create paper like style for the component
 */

import React, { useContext } from 'react';
import {
  ItemContainer,
  ItemDetails,
  ItemIcon,
  ItemName
} from '../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks';
import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';
import Spinner from '../../Layout/Spinner';

import { FaArchive } from 'react-icons/fa';

export default function FancyItemResearchPapers() {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { fancyItemDetails, loading } = genreFancyItemContext;

  const { researchPapers } = fancyItemDetails;

  if (researchPapers === undefined) {
    return <Spinner />;
  }
  if (researchPapers === null) {
    return null;
  }

  return (
    <React.Fragment>
      <ItemContainer>
        {researchPapers.map(researchPaper => (
          <ItemDetails href={'http://' + researchPaper.researchPaperURL}>
            <ItemIcon>
              <FaArchive size={24} />
            </ItemIcon>
            <ItemName>{researchPaper.researchPaperName}</ItemName>
          </ItemDetails>
        ))}
      </ItemContainer>
    </React.Fragment>
  );
}
