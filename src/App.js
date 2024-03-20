import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate
} from "react-router-dom";
import './App.css';
import { useContext, useEffect, useState } from 'react';
import Card from './component/Card'
import Navbar from './component/Navbar/navbar';
import Home from "./component/Home";
import About from "./component/About";
import ShowCart from "./component/ShowCart";
import AuthContext from "./store/auth-context";
import ShowSpecific from "./component/ShowSpecific";
import Login from "./component/Login/login";

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
        <Route path='/' element={authCtx.isLogin ? <Home/>: <Navigate to='/login'/>}/>
        <Route path='/store' element={authCtx.isLogin ? <Card products={products}/>: <Navigate to='/login'/>}></Route>
        <Route path='/about' element={authCtx.isLogin ? <About/>:<Navigate to='/login'/>}/>
        <Route path='/cart' element={authCtx.isLogin ? <ShowCart/>: <Navigate to='/login'/>}/>
        <Route path="/product" element={<ShowSpecific/>}/>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;
