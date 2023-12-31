import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [
    {
      item_id: 'item1',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const oldBookList = [...state.bookList, action.payload];
      state.bookList = oldBookList;
    },

    removeBook: (state, action) => {
      state.bookList = state.bookList.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
