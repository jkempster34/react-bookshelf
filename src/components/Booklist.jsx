import React from "react";
import { Bookcard } from "./Bookcard.jsx";

const Booklist = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return <Bookcard key={book.etag} book={book} />;
      })}
    </ul>
  );
};

export default Booklist;
