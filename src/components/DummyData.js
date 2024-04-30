const books = [
  { id: 1, title: 'The Girl with the Dragon Tattoo', genre: 'Mystery' },
  { id: 2, title: 'Gone Girl', genre: 'Mystery' },
  { id: 3, title: 'The Da Vinci Code', genre: 'Mystery' },
  { id: 4, title: 'Sherlock Holmes: The Hound of the Baskervilles', genre: 'Mystery' },
  { id: 5, title: 'Big Little Lies', genre: 'Mystery' },
  { id: 6, title: 'The Silent Patient', genre: 'Mystery' },
  { id: 7, title: 'The Girl on the Train', genre: 'Psychological Thriller' },
  { id: 8, title: 'Sharp Objects', genre: 'Psychological Thriller' },
  { id: 9, title: 'Before I Go to Sleep', genre: 'Psychological Thriller' },
  { id: 10, title: 'The Woman in the Window', genre: 'Psychological Thriller' },
  { id: 11, title: 'Gone Girl', genre: 'Psychological Thriller' },
  { id: 12, title: 'The Girl with the Dragon Tattoo', genre: 'Psychological Thriller' },
  { id: 13, title: 'The Shining', genre: 'Horror' },
  { id: 14, title: 'It', genre: 'Horror' },
  { id: 15, title: 'Dracula', genre: 'Horror' },
  { id: 16, title: 'Frankenstein', genre: 'Horror' },
  { id: 17, title: 'The Exorcist', genre: 'Horror' },
  { id: 18, title: 'Pet Sematary', genre: 'Horror' },
  { id: 19, title: 'Pride and Prejudice', genre: 'Romance' },
  { id: 20, title: 'The Notebook', genre: 'Romance' },
  { id: 21, title: 'Me Before You', genre: 'Romance' },
  { id: 22, title: 'Outlander', genre: 'Romance' },
  { id: 23, title: 'The Fault in Our Stars', genre: 'Romance' },
  { id: 24, title: 'The Time Traveler\'s Wife', genre: 'Romance' },
  { id: 25, title: 'Bridget Jones\'s Diary', genre: 'Comedy' },
  { id: 26, title: 'The Hitchhiker\'s Guide to the Galaxy', genre: 'Comedy' },
  { id: 27, title: 'Good Omens', genre: 'Comedy' },
  { id: 28, title: 'Where\'d You Go, Bernadette', genre: 'Comedy' },
  { id: 29, title: 'The Rosie Project', genre: 'Comedy' },
  { id: 30, title: 'Eleanor Oliphant Is Completely Fine', genre: 'Comedy' },
  { id: 31, title: 'The Hobbit', genre: 'Adventure' },
  { id: 32, title: 'Jurassic Park', genre: 'Adventure' },
  { id: 33, title: 'Treasure Island', genre: 'Adventure' },
  { id: 34, title: 'Robinson Crusoe', genre: 'Adventure' },
  { id: 35, title: 'Journey to the Center of the Earth', genre: 'Adventure' },
  { id: 36, title: 'Around the World in Eighty Days', genre: 'Adventure' },
  { id: 37, title: 'To Kill a Mockingbird', genre: 'Drama' },
  { id: 38, title: 'The Great Gatsby', genre: 'Drama' },
  { id: 39, title: 'The Catcher in the Rye', genre: 'Drama' },
  { id: 40, title: 'Of Mice and Men', genre: 'Drama' },
  { id: 41, title: 'The Grapes of Wrath', genre: 'Drama' },
  { id: 42, title: 'The Bell Jar', genre: 'Drama' },
  { id: 43, title: 'Romeo and Juliet', genre: 'Tragedy' },
  { id: 44, title: 'Hamlet', genre: 'Tragedy' },
  { id: 45, title: 'Macbeth', genre: 'Tragedy' },
  { id: 46, title: 'Othello', genre: 'Tragedy' },
  { id: 47, title: 'King Lear', genre: 'Tragedy' },
  { id: 48, title: 'Antigone', genre: 'Tragedy' },
  { id: 49, title: 'Leaves of Grass', genre: 'Poetry' },
  { id: 50, title: 'The Waste Land', genre: 'Poetry' },
  { id: 51, title: 'Beowulf', genre: 'Poetry' },
  { id: 52, title: 'Paradise Lost', genre: 'Poetry' },
  { id: 53, title: 'The Divine Comedy', genre: 'Poetry' },
  { id: 54, title: 'The Iliad', genre: 'Poetry' }
];



export const getMatchedBooks = (genres) => {
  let genre = genres[Math.floor(Math.random() * genres.length)];
  console.log('GENRE:', genre)

  // when you choose api, limit the book selection to just 3 random books
  // from the genre
  let bookArray = books.filter(book => {
    return book.genre === genre
  }).sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3)


  console.log('BOOK ARRAY:', bookArray)
  return bookArray
};