import React, { useEffect } from "react";
// import { fetchBooks } from "../api";
import { getMatchedBooks } from "./DummyData";


const Books = ({ books, setBooks, loading, setLoading }) => {

  const handleGetMatchedBooks = (mood) => {

    const moodsAndGenres = {
      bored: ['Mystery', 'Psychological Thriller', 'Horror'],
      happy: ['Romance', 'Comedy', 'Adventure'],
      sad: ['Drama', 'Tragedy', 'Poetry']
    }

    const genres = moodsAndGenres[mood]
    let matchedBooks = getMatchedBooks(genres);
    setBooks(matchedBooks);
  };



  return (
    <div>
      <h1>BOOKS</h1>
      <button onClick={() => { handleGetMatchedBooks('bored') }}> BORED </button>
      <button onClick={() => { handleGetMatchedBooks('happy') }}> HAPPY </button>
      <button onClick={() => { handleGetMatchedBooks('sad') }}> SAD </button>
      <h2>Since you're feeling..., how about some ...</h2>
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