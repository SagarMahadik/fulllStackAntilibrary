/**
 * File Name : genreCommonStyles.js
 * Collection of the common styles used in the GenreDetails component
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 30px;
`;

export const Genre = styled(Link)`
  display: block;
  margin: auto;
  color: whitesmoke;
  border-radius: 7px;
  width: 200px;
  height: 200px;
  text-align: center;
  background-size: cover;
  background-position: top;
  text-decoration: none;
`;

export const GenreName = styled.h2`
  display: block;
  margin-top: -125px;
  margin-left: 30px;
  padding: 5px;
  font-size: 1rem;
  line-height: 1.7;
  text-align: center;
  ${Genre}:hover {
    font-size: 1.2rem;
    margin-top: 90px;
  }
`;
