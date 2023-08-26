import Book from '../Book';
import Form from '../Form';

const BooksPage = () => {
  const books = [
    { id: '01', title: 'Anna Karenina', author: 'Leo Tolstoy' },
    { id: '02', title: 'Le contract social', author: 'Jean Jacques Rousseau' },
    { id: '03', title: 'Man and the war', author: 'Bernard Shaw' },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
};

export default BooksPage;
