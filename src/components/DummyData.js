const books = [
  {
    id: 1,
    title: 'Alice in Wonderland',
    genre: 'Fantasy'
  },
  {
    id: 2,
    title: 'Pride and Prejudice',
    genre: 'Classic Literature'
  },
  {
    id: 3,
    title: 'Harry Potter',
    genre: 'Fantasy'
  },
  {
    id: 4,
    title: 'Sherlock Holmes',
    genre: 'Mystery'
  },
  {
    id: 5,
    title: 'Get A Life, Chloe Brown',
    genre: 'Romance'
  },
  {
    id: 6,
    title: 'A Mystery Book',
    genre: 'Mystery'
  },
  {
    id: 7,
    title: 'A Psychological Thriller Book',
    genre: 'Psychological Thriller'
  },
  {
    id: 8,
    title: 'A Horror Book',
    genre: 'Horror'
  },
  {
    id: 9,
    title: 'Another Horror Book',
    genre: 'Horror'
  },
  {
    id: 10,
    title: 'Another Psychological Thriller Book',
    genre: 'Psychological Thriller'
  },
  {
    id: 11,
    title: 'Another Mystery Book',
    genre: 'Mystery'
  },
  {
    id: 12,
    title: 'Yet Another Psychological Thriller Book',
    genre: 'Psychological Thriller'
  },
  {
    id: 13,
    title: 'Yet Another Horror Book',
    genre: 'Horror'
  }
]

export const getMatchedBooks = (genres) => {
  let genre = genres[Math.floor(Math.random() * genres.length)];
  console.log('GENRE:', genre)

  let bookArray = books.filter(book => {
    return book.genre === genre
  })

  console.log('BOOK ARRAY:', bookArray)
  return bookArray

};