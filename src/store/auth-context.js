import React, { useState } from "react";
import { useContext } from "react";

const AuthContext=React.createContext({
    items: [],
    price: 0,
    quantity: 0
})

export const AuthContextProvider=(props)=>{
   const [items,setItmes]=useState();
   const [price,setPrice]=useState();
   const [quantity,setQuantity]=useState();

const contextValue={
    items: items,
    price: price,
    quantity: quantity
}

return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
 