// export const BASE_URL = '';
// const apiKey = process.env.API_KEY
import env from 'react-dotenv';
// dotenv.config()
export const fetchBooks = async () => {
  try {
    console.log(process.env.API_KEY)
    const genre = 'fantasy'
    const maxResults = 3;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=${maxResults}&key=${env.API_KEY}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()
    console.log('API RESULTS:', result)
    return result;
  } catch (error) {
    console.error(error)
  }
}