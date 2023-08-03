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
            <img className="logo" src ="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" alt='logo'></img>
            {auth ? 
         <ul className='Header-ul'>
         <li> <Link to="/">Products </Link> </li>
         <li> <Link to="/add">Add Product </Link> </li>
         <li> <Link to="/update">Update product </Link> </li>
         <li> <Link to="/profile">Profile </Link> </li>
         <li><Link onClick={logout} to ="/signup">Logout ({JSON.parse(auth).name})</Link></li>
         </ul>
            : 
        <ul className='Header-ul nav-right' >
             <li> <Link to ="/login"> Login </Link></li> 
            <li> <Link to="/signup"> SignUp </Link> </li>
            </ul>
        }

        </div>
    )
}

export default Header;