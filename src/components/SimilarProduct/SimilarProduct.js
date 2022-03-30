import {useSelector, useDispatch} from "react-redux";
import { createCard } from "../../utils/cardGenerate";
import {
    Grid,
    Card,
    Button,
    CardActions
} from "@mui/material";
import {addToCart} from "../../ducks/cart";


export function SimilarProduct(props) {
    const { categories } = props.item
    const { data } = useSelector(state => state.catalog)
    const dispatch = useDispatch()

    const similarProducts = data.filter(product => {
        return product.categories.find(category =>  {
            return categories?.find(el => el === category)
        })
    })
    if(similarProducts.length > 6) {
        similarProducts.length = 6
    }

    console.log(similarProducts)
    return(
        <Grid
            container
            spacing={ 1 }
        >
            { similarProducts.map(product => (
                <Grid
                    key={ product.id }
                    item
                    md={ 4 }
                >
                    <Card>
                        { createCard(product) }
                        <CardActions className="card-button__container"
                                     onClick={(e) => {
                                         e.preventDefault()
                                         // let checkContain = cart.items.includes(product => product.id)
                                         // console.log(checkContain)
                                         dispatch(addToCart({
                                             id: product.id
                                         }
                                         ))
                                     }}
                        >
                            <Button variant='outlined'> buy </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )) }
        </Grid>
    )
}