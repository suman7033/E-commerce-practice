// navbar.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';


const Navbar = () => {
  const authCtx=useContext(AuthContext);
  return (
    <div className='maindev'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'><b>HOME</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/store'><b>STORE</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'><b>ABOUT</b></Link>
            </li>
          </ul>
          <h1 className='nav-item'>
            <Link className='nav' to='/cart'>
            <h5><b>{authCtx.items.length}</b></h5>
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEtTQAtBcGUnBFiM9sUNuPfaBcUIZiaVRWB_OSnegHw&s'/>
            </Link>
          </h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
