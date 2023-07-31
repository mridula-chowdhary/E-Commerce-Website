import React,{useState} from 'react'

const SignUp=()=>{
  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const collectData=()=>{
    console.warn(name,email,password);
  }
  return (
    <div className='register'>
       <h1>Register</h1>
        <input className='inputBox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>       
        <input className='inputBox' type ='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
        <input className='inputBox' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'/>
        <button onClick={collectData} className='signButton'type='button'>Sign Up</button>
    </div>
  )
}

export default SignUp;

