import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return (
        <div>
         <ul className='Header-ul'>
         <li> <Link to="/">Product </Link> </li>
         <li> <Link to="/add">Add Prduct </Link> </li>
         <li> <Link to="/update">Update product </Link> </li>
         <li> <Link to="/logout">Logout </Link> </li>
         <li> <Link to="/profile">Profile </Link> </li>



         </ul>
        </div>
    )
}

export default Header;