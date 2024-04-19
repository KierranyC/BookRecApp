import env from 'react-dotenv';

export const fetchBooks = async () => {
  try {

    const categories = 'drama'
    const maxResults = 20;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${categories}&maxResults=${maxResults}&key=${env.API_KEY}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })


    const result = await response.json()
    return result;
  } catch (error) {
    console.error(error)
  }
}

// export const fetchBooks = async () => {
//   try {

//     const response = await fetch(`https://openlibrary.org/subjects/fiction.json?published_in=2000-2024`, {

//     })

//     const result = await response.json()
//     return result;
//   } catch (error) {
//     console.error(error)
//   }
// }