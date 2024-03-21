import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AuthContext=React.createContext({
    items: [],
    price: 0,
    quantity: 0,
    email: '',
    token: 0,
    responseDataName: "",
    SpecialProduct:[],
    isLogin: false,
})

export const AuthContextProvider=(props)=>{
  const initialToken=localStorage.getItem('tokenId')
  const initialEmail=localStorage.getItem('email');
   const [items,setItmes]=useState([]);
   const [price,setPrice]=useState();
   const [quantity,setQuantity]=useState();
   const [email,setEmail]=useState(initialEmail);
   const [token,setToken]=useState();
   const [responseDataName,setResponseDataName]=useState('');
   const [SpecialProduct,setSpecialProduct]=useState([]);
   const [isLogin,setIsLogin]=useState(!!initialToken);

   const addItemHandler=(addData)=>{
     setItmes((prev)=>[...prev,addData]);
     //setIsLogin(true);
   }
   const ApiNameHandler=(name)=>{
     setResponseDataName(name);
     console.log(name);
   }
   const showSpecialProductHandler=(data)=>{
      setSpecialProduct(data);
   }
   const loginHandler=(token,email)=>{
    console.log('login',email);
    console.log('tokenId',token);
      if(email !=''){
        setIsLogin(true);
      }
      setEmail(email);
      setToken(token);
   }
   const removeHandler=()=>{
    alert("logout")
      setEmail(null);
      setToken(null);
      setIsLogin(false);
      setItmes(null);
      localStorage.removeItem('tokenId');
      localStorage.removeItem('email');
   }
   const loginCheckHandler=()=>{
     setIsLogin(true);
   }

const contextValue={
    items: items,
    price: price,
    email: email,
    token: token,
    responseDataName:responseDataName,
    quantity: quantity,
    addItem: addItemHandler,
    responseDataName: ApiNameHandler,
    showSpecialProduct:showSpecialProductHandler,
    SpecialProduct: SpecialProduct,
    login: loginHandler,
    isLogin: isLogin,
    remove: removeHandler,
    LoginCheck: loginCheckHandler

}

return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
 