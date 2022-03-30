import { Box } from '@mui/material'
import './FiltersPage.scss'

export function FiltersPage() {
    return(
        <Box 
            sx={{ backgroundColor: 'secondary.main'}} 
            className='filters-container'
        >

            <Box 
                component='h2'
                className="filters-title"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'text.secondary',
                    // fontSize: 30,
                }}
            >
                
                awersome shop
            </Box>
        </Box>
    )
}