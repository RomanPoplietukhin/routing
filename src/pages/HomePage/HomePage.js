import { Box } from '@mui/system'
import {Typography} from "@mui/material";

export function HomePage() {
    return(
        <Box sx={{mt: '30vh', textAlign: 'center'}}>
            <Typography variant='h2'>
                Welcome to awersome shop!!
            </Typography>
            <Typography variant='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, autem.
            </Typography>
        </Box>
    )
}