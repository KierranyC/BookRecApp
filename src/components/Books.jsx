import React, { useEffect } from "react";
import { fetchBooks } from "../api";


const Books = ({ books, setBooks, loading, setLoading }) => {


  useEffect(() => {
    async function getBooks() {
      const data = await fetchBooks()
      console.log("BOOKS:", data)
      setBooks(data)
      setLoading(false)
    }
    getBooks()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  else {
    return (
      <div>
        <h1>BOOKS</h1>
      </div>
    )
  }


}

export default Books;