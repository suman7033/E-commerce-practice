import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

const navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    </div>

    <div className="container-fluid">
    <a className="navbar-brand" href="#">Store</a>
    </div>

    <div className="container-fluid">
    <a className="navbar-brand" href="#">About</a>
    </div>
    <Cart/>
    </nav>
    </div>
  )
}

export default navbar;
