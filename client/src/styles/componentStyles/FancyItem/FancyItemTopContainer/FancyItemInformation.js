import styled from 'styled-components';

export const FancyItemInfoContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  margin-top: -100px;
  background: #333333;
`;

export const FancyItemImageContainer = styled.div`
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;

export const FancyItemName = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const FancyItemQuote = styled.div`
  display: block;
  margin: auto;
  color: rgb(253, 253, 253);
  font-size: 1.2rem;
  text-align: center;
  width: auto;
  height: auto;
  padding: 10px;
  margin-top: -10px;
`;
