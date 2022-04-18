import {useSelector, useDispatch} from "react-redux";
import { BuyProductButton } from "../BuyProductButton";
import { CreateCard } from "../CreateCard";
import { Grid, Card } from "@mui/material";
// import {addToCart} from "../../ducks/cart";
import {useEffect, useMemo} from "react";


export function SimilarProduct(props) {
    const { categories } = props.item
    const { data } = useSelector(state => state.catalog)
    // const dispatch = useDispatch()

    const similarProducts = useMemo(() => {///большой вопрос, обязвтльно глянуть
        return data.filter(product => {
            return product.categories.find(category =>  {
                return categories?.find(el => el === category)
            })
    } , [data, categories])
    })
    if(similarProducts.length > 6) {
        similarProducts.length = 6
    }
    return(
        <Grid container spacing={ 1 }>
            { similarProducts.map(product => (
                <Grid key={ product.id } item md={ 4 }>
                    <Card>
                        <CreateCard { ...product }/>
                        <BuyProductButton{ ...product }/>
                        {/*<CardActions className="card-button__container"*/}
                        {/*             onClick={(e) => {*/}
                        {/*                 e.preventDefault()*/}
                        {/*                 // let checkContain = cart.items.includes(product => product.id)*/}
                        {/*                 // console.log(checkContain)*/}
                        {/*                 dispatch(addToCart({*/}
                        {/*                     id: product.id*/}
                        {/*                 }*/}
                        {/*                 ))*/}
                        {/*             }}*/}
                        {/*>*/}
                        {/*    <Button variant='outlined'> buy </Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                </Grid>
            )) }
        </Grid>
    )
}