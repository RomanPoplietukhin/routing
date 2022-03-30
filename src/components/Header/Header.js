// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from "react";
import { NavLink } from "react-router-dom";
// import './Header.scss'

export function Header() {
    return (
        <div>
            <div className='header-logo'> 
                AWERShop 
            </div>
            <nav className='header-navigation'>
                <ul className='header-navigation__list'>
                    <li className='list-item'>
                        <NavLink to='/'> home  </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/catalog'> catalog </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/about'> about </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/delivery'> delivery </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/cart'> cart </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
            // <div className='header-logo'> 
            //     AWERShop 
            // </div>
            // <nav className='header-navigation'>
            //     <ul className='header-navigation__list'>
            //         <li className='list-item'>
            //             <NavLink to='/'> home  </NavLink>
            //         </li>
            //         <li className='list-item'>
            //             <NavLink to='/catalog'> catalog </NavLink>
            //         </li>
            //         <li className='list-item'>
            //             <NavLink to='/about'> about </NavLink>
            //         </li>
            //         <li className='list-item'>
            //             <NavLink to='/delivery'> delivery </NavLink>
            //         </li>
            //         <li className='list-item'>
            //             <NavLink to='/cart'> cart </NavLink>
            //         </li>
            //     </ul>
            // </nav>