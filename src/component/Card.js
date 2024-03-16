import React from 'react'
import '../component/card.css';

const Home = ({products}) => {
    console.log("props",products);

  return (
    <div className='flex'>
      {
       products.map((product,index)=>{
         return <div key={index}>
            <div className='product-item'>
            <h3 className='title'>{product.title}</h3>
            <img src={product.imageUrl} alt='pic'/>
            <h3 className='price'>${product.price}</h3>
          </div>
         </div>
       })
      }
    </div>
  )
}

export default Home
