/**
 * File Name : genreFancyItemInformation.js
 * Variable styles : textcolor and gradient set according to the theme
 * Check "theme" in the "styles/applicationStyles" for more info.
 * Developer Note : ImageWrapper style needed some patch work to get overlay gardient in shape
 */

import { textColor, gradient } from '../../applicationStyles/genreTheme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GenreFancyItemsContainer = styled.div`
  display: block;
  margin: auto;
`;

export const GenreFancyItemContainer = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const FancyItemBox = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  @media (min-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 4;
    margin: 20px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 5;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${gradient};
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  display: block;
  z-index: -1;
  @media (min-width: 765px) {
    margin: auto;
  }
`;

export const FancyItemContent = styled.div`
  text-align: left;
  margin-left: 1.8em;
  text-decoration: none;
  color: white;
  @media (min-width: 765px) {
    margin-left: 0px;
  }
`;

export const NotableWork = styled.p`
  margin-top: -10px;
  color: ${textColor};
  ${FancyItemContent}:hover & {
    color: white;
  }
  @media (min-width: 765px) {
    text-align: center;
  }
`;

export const FancyItemName = styled.h4`
  margin-top: 10px;
  ${FancyItemContent}:hover & {
    color: ${textColor};
  }
  @media (min-width: 765px) {
    text-align: center;
  }
`;
