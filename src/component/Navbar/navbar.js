// navbar.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import the CSS file
import Cart from './Cart';

const Navbar = () => {
  return (
    <div className='maindev'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Remove the "My Website" link */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/"><b>HOME</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store"><b>STORE</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><b>ABOUT</b></Link>
            </li>
          </ul>
          <Cart />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
