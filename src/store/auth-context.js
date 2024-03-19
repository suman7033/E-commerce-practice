import React, { useState } from "react";
import { useContext } from "react";

const AuthContext=React.createContext({
    items: [],
    price: 0,
    quantity: 0,
    responseDataName: "",
    SpecialProduct:[]
})

export const AuthContextProvider=(props)=>{
   const [items,setItmes]=useState([]);
   const [price,setPrice]=useState();
   const [quantity,setQuantity]=useState();
   const [responseDataName,setResponseDataName]=useState('');
   const [SpecialProduct,setSpecialProduct]=useState([]);

   const addItemHandler=(addData)=>{
     setItmes((prev)=>[...prev,addData]);
   }
   const ApiNameHandler=(name)=>{
     setResponseDataName(name);
     console.log(name);
   }
   const showSpecialProductHandler=(data)=>{
      setSpecialProduct(data);
      console.log("showSpecial",data);
   }

const contextValue={
    items: items,
    price: price,
    responseDataName:responseDataName,
    quantity: quantity,
    addItem: addItemHandler,
    responseDataName: ApiNameHandler,
    showSpecialProduct:showSpecialProductHandler,
    SpecialProduct: SpecialProduct
}

return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
 