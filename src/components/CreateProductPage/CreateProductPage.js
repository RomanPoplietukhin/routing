import { ProductPageSkeleton } from "../ProductPageSkeleton";
import {Typography, Box, Paper, Card, Container, Rating, Stack, Avatar} from "@mui/material";

export function CreateProductPage(props) {
    console.log(props)
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{ maxWidth: '50%', position: 'relative'}}>
                <img
                    style={{ width: '100%', height: '100%', objectFit: "cover", borderRadius: '10px'}}
                    src={ props.photo }
                />
            </Box>
            <Box>
                <Container>
                    <Typography variant='h3' >{ props.title }</Typography>
                    <Typography
                        variant='h6'
                        sx={{ color: 'background.buttonBg'}}>
                            { `${props.price} $` }
                    </Typography>
                    <Typography>{ props.createdAt }</Typography>
                    <Box sx={{display: 'flex', marginTop: '1vh'}}>
                        { props.isNew && (
                            <Stack>
                                <Avatar sx={{backgroundColor: 'green', mr: '1vw'}}>
                                    new
                                </Avatar>
                            </Stack>

                        ) }
                        { props.isSale && (
                            <Stack>
                                <Avatar sx={{backgroundColor: 'red'}}>
                                    sale
                                </Avatar>
                            </Stack>
                        ) }
                    </Box>
                    <Rating
                        sx={{marginTop: '1vh'}}
                        value={ props.rating / 10 }
                        max={ 10 }
                        precision={.5}
                    />
                    <Typography>{ props.description }</Typography>
                    {/*<Typography>{ props.isInStock }</Typography>*/}
                </Container>
            </Box>
        </Box>

    )
}