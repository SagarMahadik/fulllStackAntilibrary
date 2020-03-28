/**
 * FancyItemcourses.js
 * Component contains the fancyitem courses, displays null if there is none present
 * Future scope: Display the video with thumbnail from API
 */
import React, { useContext } from 'react';
import {
  ItemContainer,
  ItemDetails,
  ItemIcon,
  ItemName
} from '../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks';

import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';

import { FaVideo } from 'react-icons/fa';
import Spinner from '../../Layout/Spinner';

export default function FancyItemVideos() {
  const genreFancyItemContext = useContext(GenreFancyItemContext);

  const { fancyItemDetails, loading } = genreFancyItemContext;

  const { courses } = fancyItemDetails;

  if (courses === undefined) {
    return <Spinner />;
  }

  if (courses === null) {
    return null;
  }
  return (
    <React.Fragment>
      <ItemContainer>
        {courses.map(course => (
          <ItemDetails href={'http://' + course.courseURL}>
            <ItemIcon>
              <FaVideo size={24} />
            </ItemIcon>
            <ItemName>{course.courseName}</ItemName>
          </ItemDetails>
        ))}
      </ItemContainer>
    </React.Fragment>
  );
}
