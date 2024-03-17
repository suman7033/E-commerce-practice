import React, { useContext, useState } from 'react'
import '../component/card.css';
import AuthContext from '../store/auth-context';

const Card = ({ products }) => {
  const [data,setData]=useState([]);
  const authCtx=useContext(AuthContext);


  const AddHandler = async (data) => {
    try {
      const response = await fetch('https://practice-299c5-default-rtdb.firebaseio.com/user.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const responseData = await response.json();
      console.log('POST Response:', responseData);
  
      if (responseData && responseData.name) {
        const addedDataRes = await fetch(`https://practice-299c5-default-rtdb.firebaseio.com/user/${responseData.name}.json`);
        if (!addedDataRes.ok) {
          throw new Error('Failed to get added data');
        }
        const addData = await addedDataRes.json();
        //alert('Successfully added');
       authCtx.addItem(addData);
        //console.log('Added Data:', addData);
      } else {
        throw new Error('Response data is null or missing "name" field');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='flex'>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div className='product-item'>
              <h3 className='title'>{product.title}</h3>
              <img src={product.imageUrl} alt='pic' />
              <h3 className='price'>{product.price}</h3>
              <button className='addBtn' onClick={() => AddHandler(product)}>ADD TO CART</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
