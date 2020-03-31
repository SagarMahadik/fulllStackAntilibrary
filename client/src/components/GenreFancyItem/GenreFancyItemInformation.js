/**
 * File Name : GenreFancyItemInformation.js
 * Contains information about the "fancyItem" of the genre
 */
import React from 'react';
import {
  GenreFancyItemContainer,
  FancyItemBox,
  ImageWrapper,
  Image,
  FancyItemContent,
  NotableWork,
  FancyItemName
} from '../../styles/componentStyles/GenreFancyItem/genreFancyItemInformation';

const GenreFancyItemInformation = ({
  genreFancyItemDetail: {
    firstName,
    lastName,
    notableWork,
    profilePicture,
    _id
  }
}) => {
  console.log(profilePicture);
  return (
    <GenreFancyItemContainer>
      <FancyItemBox to={`/FancyItem/${_id}`}>
        <ImageWrapper>
          <Image src={profilePicture} />
        </ImageWrapper>
        <FancyItemContent>
          <FancyItemName>
            {firstName} {lastName}
          </FancyItemName>
          <NotableWork>{notableWork}</NotableWork>
        </FancyItemContent>
      </FancyItemBox>
    </GenreFancyItemContainer>
  );
};

export default GenreFancyItemInformation;
