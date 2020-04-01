/**
 * File Name : GenreFancyItem.js
 * Styles for the GenreFancyItem component
 */

import styled from 'styled-components';

export const GenreDetaills = styled.h2`
  text-align: center;
  position: sticky;
  top: 40px;
  margin-top: -180px;
`;

export const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  z-index: 2;
  @media (min-width: 765px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

export const GradientContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: #333;
  top: 0px;
  z-index: 1;
`;
