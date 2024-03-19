import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import './App.css';
import { useContext, useEffect, useState } from 'react';
import Card from './component/Card'
import Navbar from './component/Navbar/navbar';
import Home from "./component/Home";
import About from "./component/About";
import ShowCart from "./component/ShowCart";
import AuthContext from "./store/auth-context";

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
const [showdata,setshowdata]=useState([]);
  const authCtx=useContext(AuthContext);

   const fetchData=async ()=>{
      const FetchData=await fetch(`https://practice-299c5-default-rtdb.firebaseio.com/user.json`)
      const Data=await FetchData.json();
      let array=[];
       
      for (const key in Data) {
          const innerObject = Data[key];
          array.push(innerObject);                         
      }
      console.log("useEffect",array);
      for(let i=0; i<array.length; i++){
        authCtx.addItem(array[i]);
      }
   }
  useEffect(()=>{
    fetchData();
  },[]);
   
  return (
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Card products={products}/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<ShowCart/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;
