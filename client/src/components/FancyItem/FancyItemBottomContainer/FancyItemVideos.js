/**
 * FancyItemVideos.js
 * Component contains the fancyitem videos, displays null if there is none present
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

  const { videos } = fancyItemDetails;

  if (videos === undefined) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <ItemContainer>
        {videos.map(video => (
          <ItemDetails href={video.videoURL} target="_blank">
            <ItemIcon>
              <FaVideo size={24} />
            </ItemIcon>
            <ItemName>{video.videoName}</ItemName>
          </ItemDetails>
        ))}
      </ItemContainer>
    </React.Fragment>
  );
}
