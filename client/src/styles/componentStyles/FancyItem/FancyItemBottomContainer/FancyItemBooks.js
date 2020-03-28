/**
 * Add the theme color to ItemIcon
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { iconColor } from '../../../applicationStyles/genreTheme';

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 20px;
  flex-flow: column wrap;
`;

export const ItemDetails = styled.a`
  height: 42px;
  display: flex;
  flex-flow: row wrap;
  margin-top: 8px;
  width: 100%;
  align-self: center;
  text-decoration: none;
  color: white;
`;

export const ItemIcon = styled.div`
  margin-left: 20px;
  width: 12px;
  color: ${iconColor};
  ${ItemDetails}:hover & {
    color: white;
  }
`;

export const ItemName = styled.div`
  margin-left: 30px;
  padding: 5px;
  ${ItemDetails}:hover & {
    color: ${iconColor};
  }
`;
