import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useContext} from 'react';
import AuthContext from '../../store/auth-context';


const Navbar = (props) => {
  const authCtx=useContext(AuthContext);
  console.log('navbar authCtx',authCtx.items);
  
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
            <Link className='nav-link' to='/login'><b>LOGIN</b></Link>
          </li>
              <Link className='nav-link' to='profile'>
               <img className='img1' src='https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg' alt='pic'/>
              </Link>&nbsp; &nbsp;
          </ul>
          <h1 className='nav-item'>
            <Link className='nav-link' to='/cart'>
            <h5><b>{authCtx.isLogin ? authCtx.items.length: '0'}</b></h5>
            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEtTQAtBcGUnBFiM9sUNuPfaBcUIZiaVRWB_OSnegHw&s' alt='pic'/>
            </Link>
          </h1>
          <h2>
            <button className='logout' onClick={()=>authCtx.remove()}>LOGOUT</button>
          </h2>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Navbar;