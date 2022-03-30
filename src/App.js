import { HomePage } from './pages/HomePage';
import { Catalog } from './pages/Catalog';
import { CatalogItem } from "./pages/CatalogItem";
import { Cart } from './pages/Cart';
import { About } from './pages/About'
import { Delivery } from './pages/Delivery'
import { Routes } from "react-router";
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Container, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import {  theme } from './api/Mui/muiTheme'

export function App() {
  // const [ darkMode, setDarkMode ] = useState(false);

  return (
    <ThemeProvider theme={ theme }>
      <Box 
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.primary',
        }}>
        <>
          <Header/>
        </>
        <Container >
          <Routes>
            <Route path='/' element={ <HomePage/> }/>
            <Route path='/catalog' element={ <Catalog/> }/>
            <Route path='/catalog/:id' element={ <CatalogItem/> }/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/delivery' element={ <Delivery/>}/>
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
