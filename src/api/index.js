// export const BASE_URL = '';
const apiKey = 'AIzaSyDtRcAef-sgA69SBOXYAcdJog3cP7EI8Xg';

export const fetchBooks = async () => {
  try {
    const genre = 'fantasy'
    const maxResults = 3;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=${maxResults}&key=${apiKey}`, {
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