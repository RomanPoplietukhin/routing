import {Avatar, Button, CardActionArea, CardActions, CardContent, CardMedia, Rating, Stack} from "@mui/material";
import {addToCart} from "../../ducks/cart";
import {useDispatch} from "react-redux";

export function CreateCard(cardItem) {
    // const dispatch = useDispatch()
    return (
        <>
            <CardActionArea>
                <CardMedia
                    component='img'
                    heidht='100'
                    image={ cardItem.photo }
                    alt='card poster'
                />
                <CardContent>
                    <h3 className='card-title'>{ cardItem.title }</h3>
                    <p
                        className='card-description'
                        style={{maxHeight: 30, overflowY: 'hidden'}}
                    >
                        { cardItem.description }
                    </p>
                    <span className='card-price'>
                        { cardItem.amount ? + cardItem.price  * cardItem.amount + ' $' : `${ cardItem.price } $` }
                    </span>
                    <Rating
                        defaultValue={ cardItem.rating / 10}
                        max={ 10 }
                        precision={.5}
                    />
                    <div>
                        { cardItem.isNew && (
                            <Stack>
                                <Avatar
                                    sx={{
                                        backgroundColor: 'green',
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                    }}>
                                    new
                                </Avatar>
                            </Stack>

                        ) }
                        { cardItem.isSale && (
                            <Stack>
                                <Avatar
                                    sx={{
                                        backgroundColor: 'red',
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                    }}>
                                    sale
                                </Avatar>
                            </Stack>
                        ) }
                    </div>
                </CardContent>
            </CardActionArea>
            {/*<CardActions className="card-button__container"*/}
            {/*             onClick={(e) => {*/}
            {/*                 e.preventDefault()*/}
            {/*                 dispatch(addToCart({*/}
            {/*                     id: cardItem.id*/}
            {/*                 }))*/}
            {/*             }}*/}
            {/*>*/}
            {/*    <Button sx={{*/}
            {/*        backgroundColor: 'background.buttonBg',*/}
            {/*        '&:hover': {*/}
            {/*            backgroundColor: 'background.main'*/}
            {/*        }*/}
            {/*    }} variant='contained'>*/}
            {/*        buy*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}

        </>
    )
}