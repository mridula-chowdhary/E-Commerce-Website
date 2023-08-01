import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Header=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout= ()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
         <ul className='Header-ul'>
         <li> <Link to="/">Products </Link> </li>
         <li> <Link to="/add">Add Product </Link> </li>
         <li> <Link to="/update">Update product </Link> </li>
         <li> <Link to="/profile">Profile </Link> </li>
         <li> {auth ? <Link onClick={logout} to ="/signup">Logout </Link>: 
         <Link to="/signup"> SignUp </Link> }</li>


 
         </ul>
        </div>
    )
}

export default Header;