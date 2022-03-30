import { Box } from '@mui/system'

export function HomePage() {
    return(
        <Box className="home-page__container" sx={{
            fontFamily: "'Roboto', sans-serif",
            
        }}>
            <h1 className="home-page__title">
                Welcome to <span>awersome</span> shop!!
            </h1>
            <p className="home-page__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, autem.
            </p>
        </Box>
    )
}