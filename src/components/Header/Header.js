import {Box, List, ListItem, ListItemButton, Typography} from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Typography variant='h3'>
                <NavLink
                    style={{textDecoration: 'none', color: 'inherit'}}
                    to='/'>
                        AWERShop
                </NavLink>
            </Typography>
            <nav>
                <List sx={{
                    display: 'flex',
                    listStyle: 'none',
                    fontSize: 'large',
                }}>
                    <ListItem>
                        <NavLink
                            style={{textDecoration: 'none', color: 'inherit', textTransform:'uppercase', }}
                            to='/'>
                            <ListItemButton> home </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            style={{textDecoration: 'none', color: 'inherit', textTransform:'uppercase'}}
                            to='/catalog'>
                            <ListItemButton> catalog </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            style={{textDecoration:'none', color:'inherit', textTransform:'uppercase'}}
                            to='/about'>
                            <ListItemButton> about </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            style={{textDecoration:'none', color:'inherit', textTransform:'uppercase'}}
                            to='/delivery'>
                            <ListItemButton> delivery </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            style={{textDecoration: 'none', color: 'inherit'}}
                            to='/cart'>
                            <ListItemButton>
                                <ShoppingBasketIcon/>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}
