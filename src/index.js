import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Books } from "./components";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div id='app'>
        <Routes>
          <Route path='/' element={<Books books={books} setBooks={setBooks} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </div>

    </BrowserRouter>
  )

}

ReactDOM.render(<App />, document.getElementById("app"));