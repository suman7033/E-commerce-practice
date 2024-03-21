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
            <li className='nav-item'>
            <Link className='nav-link' to='/login'><b>&nbsp; LOGIN</b></Link>
          </li>
              <Link className='nav' to='profile'>
               <img className='img1' src='data:image/jpeg;base64,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'/>
              </Link>&nbsp; &nbsp;
          </ul>
          <h1 className='nav-item'>
            <Link className='nav' to='/cart'>
              <h5></h5>
            <h5><b>{authCtx.isLogin ? `${authCtx.items.length}`:'0'}</b></h5>
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEtTQAtBcGUnBFiM9sUNuPfaBcUIZiaVRWB_OSnegHw&s'/>
            </Link>
          </h1>
          <h2>
            <button className='logout' onClick={()=>authCtx.remove()}>LOGOUT</button>
          </h2>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
