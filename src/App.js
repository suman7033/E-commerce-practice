import './App.css';
import { useState } from 'react';
import Card from './component/Card'
import Navbar from './component/Navbar/navbar';

const App = () => {
  const [products,setProduct]=useState([
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },    
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
])
   
  return (
    <>
     
    <Navbar/>
    <div className="app">
       <Card products={products}/>
    </div>
    </>
  );
};

export default App;
