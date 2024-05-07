import env from 'react-dotenv';


// export const fetchBooks = async (genres) => {
//   try {

//     let category = genres[Math.floor(Math.random() * genres.length)];
//     console.log('CATEGORY:', category)

//     const maxResults = 40;
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:'romance+fiction'&orderBy:'relevance'&maxResults=${maxResults}&key=${env.API_KEY}`, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const result = await response.json();

//     let bookArray = result.items.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
//     console.log('BOOK ARRAY:', bookArray);

//     return bookArray;
//   } catch (error) {
//     console.error(error);
//   }
// }

export const fetchBooks = async (genres) => {
  try {

    let category = genres[Math.floor(Math.random() * genres.length)];
    console.log('CATEGORY:', category);

    const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    const result = await response.json();

    let bookArray = result.works.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
    console.log('BOOK ARRAY:', bookArray);

    return bookArray;
  } catch (error) {
    console.error(error)
  }
}