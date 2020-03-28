/**
 * Name :FancyItemBooks.js
 * Contains the fancyitem Books if there are some, the component displays null if there is none
 * Future scope: To render the Book cover image with 3d style. Check for Gimp or css
 */

import React, { useContext } from 'react';
import {
  ItemContainer,
  ItemDetails,
  ItemIcon,
  ItemName
} from '../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks';
import GenreFancyItemContext from '../../../Context/genreFancyITem/GenreFancyItemContext';
import Spinner from '../../Layout/Spinner';

import { FaBook } from 'react-icons/fa';

export default function FancyItemBooks({ books }) {
  if (books === undefined) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <ItemContainer>
        {books.map(book => (
          <ItemDetails href={book.bookURL} target="_blank">
            <ItemIcon>
              <FaBook size={24} />
            </ItemIcon>
            <ItemName>{book.bookName}</ItemName>
          </ItemDetails>
        ))}
      </ItemContainer>
    </React.Fragment>
  );
}
