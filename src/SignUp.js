import React,{useState} from "react";
import { Navbar } from "react-bootstrap";
import { auth } from "./Firebase";
import  './Styles/Login.css';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignUp(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const LogIn=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          navigate('/login')
          // ...
        })
        .catch((error) => {
          console.log(error)
          // ..
        });
}
    return(
        <>
        <Navbar/>
        <div className="login-container">
      <form className="card login-form"onSubmit={LogIn}>
        <h3>Sign Up</h3>
        <input
          type="text"
          placeholder="Please enter your email address"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          
        />
        <button type="submit">Sign Up</button>
      </form>
      
    </div>
        </>
    )
}
export default SignUp