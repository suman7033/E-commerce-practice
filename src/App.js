import {
  BrowserRouter as router,
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
import ShowSpecific from "./component/ShowSpecific";
import Login from "./component/Login/login";
import Profile from "./component/Profile/profile";

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
  const authCtx=useContext(AuthContext);
   console.log("aaaaaaaaaaaa",authCtx.email);
   let ChangeEmail;
if(authCtx.email){
  ChangeEmail=authCtx.email.replace('@','').replace('.','')
}
   const fetchData=async ()=>{
      console.log("e---",ChangeEmail);
      try{
      const FetchData=await fetch(`https://practice-299c5-default-rtdb.firebaseio.com/user/${ChangeEmail}.json`)
      const Data=await FetchData.json();
      console.log('Fetch data',Data);
      
      let AfterFetch=[];
      for(const key in Data){
         const currentData={
          id: key,
          imageUrl: Data[key].imageUrl,
          price: Data[key].price,
          title: Data[key].title
         }
         AfterFetch.push(currentData);
      }
      console.log('AfterFetch',AfterFetch);
      authCtx.addItem(AfterFetch);
    }catch (error){
       console.log(error);
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
        <Route path='/profile' element={authCtx.isLogin ? <Profile/>:<Navigate to='/login'/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;
