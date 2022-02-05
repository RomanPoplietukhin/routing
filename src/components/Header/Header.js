import { Switch, Box, List, ListItem } from '@mui/material'
import { NavLink } from "react-router-dom";
import './Header.scss'

export function Header(props) {
    // const { mode, setMode } = props;
    return (
        <div className='header-container'>
            <div className='header-logo'> 
                AWERSOME 
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
                        <NavLink to='/cart'> cart </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/about'> about </NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to='/delivery'> delivery </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}