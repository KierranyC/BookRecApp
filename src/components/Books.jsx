import React, { useState } from "react";
import { fetchBooks } from "../api";
// import { getMatchedBooks } from "./DummyData";


const Books = ({ books, setBooks, loading, setLoading }) => {
  const [mood, setMood] = useState('')

  const handleGetMatchedBooks = async (mood) => {
    console.log('MOOD:', mood)
    setMood(mood)

    const moodsAndGenres = {
      bored: ['mystery', 'psychological thriller', 'horror'],
      happy: ['contemporary romance', 'rom-com', 'new adult romance', 'adventure'],
      sad: ['drama', 'tragedy', 'poetry']
    }

    const genres = moodsAndGenres[mood]

    const bookArray = await fetchBooks(genres)
    setBooks(bookArray)
  };



  return (
    <div>
      <h1>BOOKS</h1>
      <button type="button" value='bored' onClick={(event) => { handleGetMatchedBooks(event.target.value) }}> BORED </button>
      <button type="button" value='happy' onClick={(event) => { handleGetMatchedBooks(event.target.value) }}> HAPPY </button>
      <button type="button" value='sad' onClick={(event) => { handleGetMatchedBooks(event.target.value) }}> SAD </button>
      <h2>Since you're feeling {mood}, how about some ...</h2>
      {books.map(book =>
        <div id='books' key={book.id} value={book}>
          <h3>BOOK TITLE: {book.volumeInfo.title}</h3>
          {/* <h4>GENRE: {book.genre}</h4> */}
        </div>
      )}
    </div>
  )



}

export default Books;