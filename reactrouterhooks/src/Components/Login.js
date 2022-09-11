import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const LoginPage=()=> {
    const [input,setInput]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

const HandleClick=(e)=> {
    e.preventDefault()
    if(input==='' && password===''){
        return
    }
    // useing useNavigate instead of useHistory.Sending state same like useHistory.
    navigate(`/Profile/${input}`
    ,{state:{
        NewLocation:'London'
    }})
    setInput('')
    setPassword('')
}
return(
    <>
    <h2>Login Page</h2><br />
    <input
    type="text"
    value={input}
    placeholder="Name"
    onChange={(e)=> setInput(e.target.value)}
    /><br />
    <input
    type="text"
    value={password}
    placeholder="Password"
    onChange={(e)=> setPassword(e.target.value)}
    /><br />
    <button
    type="submit"
    onClick={HandleClick}
    >Login Here</button><br /><br />
    <button
    onClick={()=>navigate(-1)}
    >
        Go Back
    </button>
    </>
)
}
export default LoginPage;