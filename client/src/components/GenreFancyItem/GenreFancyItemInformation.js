/**
 * File Name : GenreFancyItemInformation.js
 * Contains information about the "fancyItem" of the genre
 * Modifications required : API to be called on loading to get the details
 * Details required for the components: FancyItem Name, Notable work and image
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
