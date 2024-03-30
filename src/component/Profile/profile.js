import React, { useContext, useRef } from 'react'
import './profile.css'
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const authCtx=useContext(AuthContext);
    const name=authCtx.email.substring(0,5);
    const email=authCtx.email;
    const passwordRef=useRef();
    const navigate=useNavigate();

    const updateHandler=async (event)=>{
        event.preventDefault();
        
        const enteredNewPassword=passwordRef.current.value;
        console.log(enteredNewPassword)
    
        //add validation
        const res =await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9lyNQsZOJSjtZY1z6NKoGqdlI5vhZBm0',
        {
             method: 'POST',
             body: JSON.stringify({
               idToken: authCtx.token,
               password: enteredNewPassword,
               returnSecureToken: true,
             }),
             headers: {
               'Content-Type': 'application/json'
             }      
        }
        )
        .then(res =>{
          console.log(res);
          navigate('/');
        });
     };
  return (
    <div>
       <div className="profile">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <hr/><br/>
      <h3>Change Password:</h3><br/><input type='text' ref={passwordRef} placeholder='password'/>
      <button onClick={updateHandler}>Update</button>
      </div>
    </div>
  )
}

export default Profile;
