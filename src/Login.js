import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import './Styles/Login.css';
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const LogIn=(e)=>{
        e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    navigate('/home')
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
    }
    return(
        <>
        <Navbar/>
        <div className="login-container">
      <form className="card login-form" onSubmit={LogIn}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          
        />
        <button type="submit">Login</button>
        
      </form>
    </div>
        </>
    )
}
export default Login