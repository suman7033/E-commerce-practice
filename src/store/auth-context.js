import React, { useState } from "react";

const AuthContext=React.createContext({
    items: [],
    price: 0,
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
   const [email,setEmail]=useState(initialEmail);
   const [token,setToken]=useState();
   const [responseDataName,setResponseDataName]=useState('');
   const [SpecialProduct,setSpecialProduct]=useState([]);
   const [isLogin,setIsLogin]=useState(!!initialToken);

   const addItemHandler=(addData)=>{
     //setItmes(prev=>[...prev,addData]);
     setItmes(addData);
     console.log("after auth",addData)
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
      setEmail(email);
      setToken(token);
      setIsLogin(true);
   }
   const removeHandler=()=>{
    alert("logout")
      setEmail(null);
      setToken(null);
      setIsLogin(false);
      localStorage.removeItem('tokenId');
      localStorage.removeItem('email');
   }
   const loginCheckHandler=()=>{
     setIsLogin(true);
   }
   const DeleteHandler=(id)=>{
      console.log('deleteId',id);
      const arr=items.filter((prev)=>prev.id !==id)
      setItmes(arr);
   }

const contextValue={
    items: items,
    email: email,
    token: token,
    responseDataName:responseDataName,
    
    addItem: addItemHandler,
    responseDataName: ApiNameHandler,
    showSpecialProduct:showSpecialProductHandler,
    SpecialProduct: SpecialProduct,
    login: loginHandler,
    isLogin: isLogin,
    remove: removeHandler,
    LoginCheck: loginCheckHandler,
    Delete: DeleteHandler

}

return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
 