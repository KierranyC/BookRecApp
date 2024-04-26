import React, { useEffect } from "react";
// import { fetchBooks } from "../api";
import { getMatchedBooks } from "./DummyData";


const Books = ({ books, setBooks, loading, setLoading }) => {

  const handleGetMatchedBooks = (genres) => {
    let matchedBooks = getMatchedBooks(genres);
    setBooks(matchedBooks);
  };






  return (
    <div>
      <h1>BOOKS</h1>
      <button onClick={() => { handleGetMatchedBooks(['Mystery', 'Psychological Thriller', 'Horror']) }}> BORED </button>
      <h2>Since you're feeling bored, how about some ...</h2>
      {books.map(book =>
        <div id='books' key={book.id} value={book}>
          <h3>BOOK TITLE: {book.title}</h3>
          <h4>GENRE: {book.genre}</h4>
        </div>
      )}
    </div>
  )



}

export default Books;