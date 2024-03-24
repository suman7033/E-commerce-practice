import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowCart.css';
import AuthContext from '../store/auth-context';

const ShowCart = () => {
    const authCtx = useContext(AuthContext);
    const [counts, setCounts] = useState({}); // State to store counts for each item

    console.log("showCart", authCtx.items);
    
    let ChangeEmail;
    if(authCtx.email){
      ChangeEmail = authCtx.email.replace('@', '').replace('.', '');
    }

    const navigate = useNavigate();

    const closePopupHandler = () => {
        //setShowPopup(false);
        console.log("show");
        navigate('/store');
    };

    const minusHandler = (id) => {
      setCounts(prevCounts => ({
        ...prevCounts,
        [id]: (prevCounts[id] || 1) - 1 // Decrement count for the specific item
      }));
    };

    const DeleteHandler = async (id) => {
      try {
        const response = await fetch(`https://practice-299c5-default-rtdb.firebaseio.com/user/${ChangeEmail}/${id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
             },
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete data');
        }
        authCtx.Delete(id);
      } catch (error) {
          console.log(error.message);
      }
    };

    const totalPrice = authCtx.items.reduce((total, item) => total + parseFloat(item.price) * (counts[item.id] || 1), 0);

    return (
      <>
      <h1 className='container Addtitle'>Your Card</h1>
        <div className='container paupoop'>
          <h3 className='Addtitle'>Your Add Item</h3>
          <div className='closeBtn'>
            <h1 className='x' onClick={closePopupHandler}>X</h1>
          </div>
            {authCtx.items.map((item,index) => (
                <div key={index} className='product-item'>
                    <button className='x1' onClick={() => DeleteHandler(item.id)}>X</button>
                    <h3 className='title'>{item.title}</h3>
                    <img src={item.imageUrl} alt='pic'/>
                    <h3 className='price'>{item.price}</h3>
                    <div className="button-container">
                      <button className='minus' onClick={() => minusHandler(item.id)}><b>-</b></button>
                      <h1>{counts[item.id] || 1}</h1>
                      <button className='plus' onClick={() => setCounts(prevCounts => ({...prevCounts, [item.id]: (prevCounts[item.id] || 1) + 1}))}><b>+</b></button>
                    </div>
                </div>
            ))}
            <h2 className='total'>Total Price: $ &nbsp; &nbsp;{totalPrice.toFixed(2)}</h2>
        </div>
        </>
    );
}

export default ShowCart;
