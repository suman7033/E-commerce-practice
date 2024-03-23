import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowCart.css';
import AuthContext from '../store/auth-context';

const ShowCart = () => {
    const authCtx = useContext(AuthContext);
    console.log("showCart",authCtx);

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const closePopupHandler = () => {
        setShowPopup(false);
        console.log("show");
        navigate('/store');
    };
    const CancelAddHandler=()=>{
       
    }

     const totalPrice = authCtx.items.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
      <>
      <h1 className='container Addtitle'>Your Card</h1>
        <div className='container paupoop'>
          <h3 className='Addtitle'>Your Add Item</h3>
          <div className='closeBtn'>
            <h1 className='x' onClick={closePopupHandler}>X</h1>
          </div>
            {authCtx.items.map((item, index) => (
                <div key={index} className='product-item'>
                    <h1 className='x1' onClick={CancelAddHandler}>X</h1>
                    <h3 className='title'>{item.title}</h3>
                    <img src={item.imageUrl} alt='pic'/>
                    <h3 className='price'>{item.price}</h3>
                </div>
            ))}
            <h2 className='total'>Total Price: $ &nbsp; &nbsp;{totalPrice.toFixed(2)}</h2>
        </div>
        </>
    );
}

export default ShowCart;
