import React from 'react'
import './cart.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Cart = () => {
  const authCtx=useContext(AuthContext);
  console.log("cart",authCtx.items);
  return (
    <div>
       <h5>{authCtx.items.length}</h5>
       <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEtTQAtBcGUnBFiM9sUNuPfaBcUIZiaVRWB_OSnegHw&s'/>
    </div>
  )
}

export default Cart
