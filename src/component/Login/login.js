import React, { useContext, useRef, useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import AuthContext from '../../store/auth-context';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef=useRef();
  const passwordRef=useRef();
  const navigate=useNavigate();
  
  const authCtx=useContext(AuthContext);

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler=(e)=>{
     e.preventDefault();
    const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;
    
    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9lyNQsZOJSjtZY1z6NKoGqdlI5vhZBm0'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9lyNQsZOJSjtZY1z6NKoGqdlI5vhZBm0'
    }
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnToken: true,
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((res)=>{
        if(res.ok){
            console.log("sucessful");
            return res.json()
        }else{
            return res.json()
            .then((data)=>{
                let errorMessage='Authentication failed'
                throw new Error(errorMessage);
            })
        }
    })
    .then((data)=>{
         authCtx.login(data.idToken, data.email);
         localStorage.setItem("tokenId",data.idToken);
         localStorage.setItem("email",data.email);
         //alert("sucessfully Login");
         navigate('/store');
    })
    .catch(err=>{
        alert(err.message);
    })
  }

  const Autologin=()=>{
    const tokenId=localStorage.getItem('tokenId');
    const email=localStorage.getItem('email');
    authCtx.login(tokenId,email);
    console.log("LoginuseEffect",tokenId);
    console.log("LoginuseEffect",email);
    navigate('/store');
   }
   useEffect(()=>{
    if(authCtx.isLogin==true){
         console.log("Login useEffect");
        Autologin();
    }
   },[authCtx.email])

  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
              <form onSubmit={submitHandler}>
            <div className='control'>
                <label htmlFor='email'><b>Your Email</b></label>
                <input type='email' id='email' required ref={emailRef}></input>
            </div>
            <div className='control'>
                <label htmlFor='password'><b>Your Password</b></label>
                <input type='password' id='password' required ref={passwordRef}></input>
            </div>
             <div className='actions'>
                <button className='toggle'>{isLogin ? 'Login': 'Create New Account'}</button><br/>
                <Link type='button'className='link' onClick={switchAuthHandler}>{isLogin ? 'Create New Account': 'Login'}</Link>
            </div>
        </form>
    </section>
  );
};

export default Login;
