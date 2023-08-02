import React from 'react'
const Login=()=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword]=React.useState('');
    const handleLogin=()=>{
        console.warn(email,password);
    }
   return (
    <div>
       <div className='login'>
        <input type = "text" className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
        <input type = "password" className='inputBox' placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)}></input>
        <button type = "button" className='signButton' onClick={handleLogin}> Login</button>
        
       </div>
    </div>
   )
}
export default Login;