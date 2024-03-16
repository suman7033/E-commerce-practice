import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

const navbar = () => {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    </div>

    <div class="container-fluid">
    <a class="navbar-brand" href="#">Store</a>
    </div>

    <div class="container-fluid">
    <a class="navbar-brand" href="#">About</a>
    </div>
    <Cart/>
    </nav>
    </div>
  )
}

export default navbar;
