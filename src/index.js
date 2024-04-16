import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import env from 'react-dotenv';




import { Books } from "./components";



const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path='/' element={<Books books={books} setBooks={setBooks} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);