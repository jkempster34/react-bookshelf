import React from "react";

export const Bookcard = ({ book }) => {
  return (
    <div>
      <h4>{book.volumeInfo.title}</h4>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="lfelji" />
    </div>
  );
};
