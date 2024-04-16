export const BASE_URL = '';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`, {
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