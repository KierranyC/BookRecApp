import env from 'react-dotenv';

// testing apis for now
export const fetchBooks = async () => {
  try {

    const categories = 'poetry'
    const maxResults = 20;
    // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q='subject'=${categories}&maxResults=${maxResults}&orderBy:"newest"&key=${env.API_KEY}`, {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:'romantic+comedy'&orderBy=relevance&key=${env.API_KEY}`)


    const result = await response.json()
    return result;
  } catch (error) {
    console.error(error)
  }
}

// export const fetchBooks = async () => {
//   try {

//     const response = await fetch(`https://openlibrary.org/subjects/fiction.json?published_in=2000`, {

//     })

//     const result = await response.json()
//     return result;
//   } catch (error) {
//     console.error(error)
//   }
// }