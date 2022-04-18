import {addToCart} from "../../ducks/cart";
import {Button, CardActions} from "@mui/material";
import {useDispatch} from "react-redux";

export function BuyProductButton(props) {
    // console.log(props)
    const dispatch = useDispatch()
    return (
        <CardActions className="card-button__container"
                     onClick={(e) => {
                         e.preventDefault()
                         dispatch(addToCart({
                             id: props.id
                         }))
                     }}
        >
            <Button sx={{
                backgroundColor: 'background.buttonBg',
                '&:hover': {
                    backgroundColor: 'background.main'
                }
            }} variant='contained'>
                buy
            </Button>
        </CardActions>
    )
}