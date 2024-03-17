import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import Card from './component/Card'
import Navbar from './component/Navbar/navbar';
import Home from "./component/Home";
import About from "./component/About";

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
     <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
      <Routes>
         <Route path="/store" element={<Card products={products}/>}></Route>
      </Routes>
       <Routes>
        <Route path="/about" element={<About/>}/>
       </Routes>
     </BrowserRouter>
     
    </>
  );
};

export default App;
