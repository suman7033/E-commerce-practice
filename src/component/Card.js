import React from 'react'
import '../component/card.css';

const Home = ({products}) => {
  const AddHandler = async (data) => {
    console.log(data);
    try {
        const response = await fetch('https://crudcrud.com/Dashboard/71e7dcd6a04a4188af0fb616d7051037.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Stringify the data object
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        alert("Successful");
        console.log("Response:", responseData);
    } catch (error) {
        console.log(error);
    }
}




  return (
    <div className='flex'>
      {
       products.map((product,index)=>{
         return <div key={index}>
            <div className='product-item'>
            <h3 className='title'>{product.title}</h3>
            <img src={product.imageUrl} alt='pic'/>
            <h3 className='price'>${product.price}</h3>
           <button className='addBtn' onClick={()=>AddHandler(product)}>ADD TO CART</button>
          </div>
         </div>
       })
      }
    </div>
  )
}

export default Home
