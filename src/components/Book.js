import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, item_id: ïtemId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(ïtemId));
  };

  return (
    <div>
      <form>
        <div>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <button onClick={handleRemove} type="button">
          Remove
        </button>
      </form>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
