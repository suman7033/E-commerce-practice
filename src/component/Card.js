import React, { useContext, useState } from 'react'
import '../component/card.css';
import AuthContext from '../store/auth-context';
import { Link } from 'react-router-dom';

const Card = ({ products }) => {
  const [data,setData]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const [ShowError, setShowError]=useState(false);

  const authCtx=useContext(AuthContext);


  const AddHandler = async (data) => {
    setIsloading(true);
    try {
      const response = await fetch('https://practice-299c5-default-rtdb.firebaseio.com/user.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        setIsloading(false);
        throw new Error('Failed to fetch data');
      }
  
      const responseData = await response.json();
      console.log('POST Response:', responseData);
      const responseDataName=responseData.name;
      authCtx.responseDataName(responseDataName);

      if (responseData && responseData.name) {
        const addedDataRes = await fetch(`https://practice-299c5-default-rtdb.firebaseio.com/user/${responseData.name}.json`);
        if (!addedDataRes.ok) {

          throw new Error('Failed to get added data');
        }
        const addData = await addedDataRes.json();
        //alert('Successfully added');
        setIsloading(false)
      console.log('Added Data:', addData);
       authCtx.addItem(addData);
         
      } else {
        throw new Error('Response data is null or missing "name" field');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const ShowProduct=(data)=>{
     authCtx.showSpecialProduct(data);
  }
  return (
    <div className='flex'>
      {! isLoading ? 
      <div className='flex'>{products.map((product, index) => {
        return (
          <div key={index}>
            <div className='product-item'>
              <h3 className='title'>{product.title}</h3>
              <Link to='/product'><img src={product.imageUrl} alt='pic' onClick={()=>ShowProduct(product)}/></Link>
              <h3 className='price'>{product.price}</h3>
              <button className='addBtn' onClick={()=>AddHandler(product)}><b>ADD TO CART</b></button>
            </div>
          </div>
        );
      })}</div> : <img src='https://i.gifer.com/ZKZg.gif'/>}
    </div>
  );
}

export default Card;
