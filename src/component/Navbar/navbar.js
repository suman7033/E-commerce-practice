import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

const navbar = () => {
  return (
    <div>
    <ul className='container nav h4  border-4 p-2 border-primary position-relative m-8 fs-2 justify-content-center bg-dark border-bottom border-body'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <li className="nav-item">
  <Link className="nav-link text-light bg-dark" aria-current="page" to="/">
      HOME
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link text-light bg-dark" to="/store">
      STORE
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link text-light bg-dark" to="/about">
      ABOUT
    </Link>
    </li>
    <Cart/>
    </nav>
    </ul>
  </div>
  )
}

export default navbar;
