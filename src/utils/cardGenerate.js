import {Avatar, CardActionArea, CardContent, CardMedia, Rating, Stack} from "@mui/material";

export function createCard(cardItem) {
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
                        { cardItem.amount ? +cardItem.price * cardItem.amount : cardItem.price }
                    </span>
                    <Rating
                        defaultValue={ cardItem.rating / 10 }
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
        </>
    )
}