/**
 * File Name : FancyItemBottomContainer.js
 * Component contains the subcomponents of the bottom part of the FancyItem Page
 * The subcomponents are not refactored as future scope requires these to be separate
 * List of sub-components : Books | Videos | Research Papers | Link to the interview
 */

import React, { useContext } from 'react';
import FancyItemBooks from '../FancyItemBottomContainer/FancyItemBooks';
import FancyItemVideos from '../FancyItemBottomContainer/FancyItemVideos';
import FancyItemResearchPapers from '../FancyItemBottomContainer/FancyItemResearchPapers';
import FancyItemInterviews from '../FancyItemBottomContainer/FancyItemInterviews';
import FancyItemCourses from '../FancyItemBottomContainer/FancyItemCourses';
import { FancyItemBottomPart } from '../../../styles/componentStyles/FancyItem/fancyItemContainer';
import Spinner from '../../Layout/Spinner';

import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';

export default function FancyItemBottomContainer() {
  const genreFancyItemContext = useContext(GenreFancyItemContext);
  const {
    fancyItemDetails,
    currentGenre,
    getFancyItemDetails,
    loading
  } = genreFancyItemContext;

  const { books } = fancyItemDetails;
  console.log(books);

  if (loading) {
    return <Spinner />;
  }

  return (
    <FancyItemBottomPart>
      <FancyItemBooks books={books} />
      <FancyItemVideos />
      <FancyItemCourses />
      <FancyItemResearchPapers />
      <FancyItemInterviews />
    </FancyItemBottomPart>
  );
}
