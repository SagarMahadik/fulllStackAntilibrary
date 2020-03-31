import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchSuggestion = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 50px;
  margin-left: 50px;
  background-color: #333333;
  padding: 5px;
`;

export const SearchResultImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
  display: block;
`;

export const SearchResultContent = styled.div`
  text-align: left;
  margin-left: 1.8em;
  text-decoration: none;
  color: white;
`;

export const SearchResultName = styled.h4`
  margin-top: 15px;
`;

export const SearchResultNotableWork = styled.h6`
  margin-top: -15px;
  color: white;
`;
