import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Login=()=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
          navigate('/')
        }
       })
    const handleLogin=async()=>{
        console.warn(email,password)
        let result = await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate("/")
        }
        else{
            alert("Please Enter Correct Info")
        }
    }
   return (
    <div>
       <div className='login'>
        <h2>Login</h2>
        <input type = "text" className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
        <input type = "password" className='inputBox' placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)}></input>
        <button type = "button" className='signButton' onClick={handleLogin}> Login</button>
        
       </div>
    </div>
   )
}
export default Login;