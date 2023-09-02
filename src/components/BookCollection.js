import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooksData } from '../redux/books/booksSlice';

const BookCollection = () => {
  const {
    books, isLoading, error, isSuccessful,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, isSuccessful]);

  if (isLoading) {
    return (
      <div>
        <p>Is Loading...</p>
      </div>
    );
  }
  if (error) return <h3>Oops! Something went wrong!</h3>;
  if (books.length === 0) return <h3>Books Not Found. Please try again later</h3>;
  return books.map((book) => (
    <div key={book.id}>
      <Book key={book.id} book={book} />
    </div>
  ));
};

export default BookCollection;
