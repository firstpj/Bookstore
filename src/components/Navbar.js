import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>Bookstore CMS</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
