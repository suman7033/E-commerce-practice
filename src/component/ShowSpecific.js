import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'
import './ShowSpecific.css';
import { Link } from 'react-router-dom';

const ShowSpecific = () => {
    const authCtx=useContext(AuthContext);
    console.log('aaaaaaaaaa',authCtx.SpecialProduct);

  return (
    <div>
        {/* <div className='show'>
       <h2>{authCtx.SpecialProduct.title}</h2>
       <h1>{authCtx.SpecialProduct.price}</h1>
       <img src={authCtx.SpecialProduct.imageUrl}/>
       <h5>Available offers</h5>

       <a>Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C</a>

       <a>Bank Offer10% Instant Discount on BOBCARD Transactions, up to ₹500 on orders of ₹5,000 and aboveT&C</a>

       <a>Bank OfferFlat ₹3,500 off on HDFC Bank Credit Card EMI Transactions, on orders of ₹50,000 and aboveT&C</a>

       <a>Combo OfferBuy 2 or more items save ₹60See all productsT&C</a>

       <Link>+13 more offers</Link>
       </div> */}
       <h1 className='title'>{authCtx.SpecialProduct.title}</h1>
       <div className='show'>
    <img src={authCtx.SpecialProduct.imageUrl} alt='Product' />
    <div className='offers'>
        <h5>Available offers</h5>
        <a>Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C</a>
        <a>Bank Offer10% Instant Discount on BOBCARD Transactions, up to ₹500 on orders of ₹5,000 and aboveT&C</a>
        <a>Bank OfferFlat ₹3,500 off on HDFC Bank Credit Card EMI Transactions, on orders of ₹50,000 and aboveT&C</a>
        <a>Combo OfferBuy 2 or more items save ₹60See all productsT&C</a>
        <Link>+13 more offers</Link>
        <h1 className='Price'>Price: {authCtx.SpecialProduct.price}</h1>
    </div>
</div>

    </div>
  )
}

export default ShowSpecific
