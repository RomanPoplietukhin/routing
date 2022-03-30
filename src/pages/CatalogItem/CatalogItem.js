import { useParams } from "react-router";
import { loadProductsItem } from "../../api/catalogItemAPI";
import { Card, CardActions, Button} from "@mui/material";
// import {useFetch} from "../../hooks/useFetch";
import { addToCart } from "../../ducks/cart";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../utils/cardGenerate";
import { SimilarProduct } from "../../components/SimilarProduct";

export function CatalogItem(props) {
    // console.log(props)
    // const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { id } = useParams()
    const [ cardInformation, setCardInformation ] = useState({})

    useLayoutEffect(() => {
        id && loadProductsItem(id)
            .then(data => setCardInformation(data.data))
    }, [id])

    return(
        <>
            { !id  ? (
                <Card>
                    { createCard(props) }
                    {/*<div>{ props.categories.map(el => <h2>{ el }</h2>)}</div>*/}
                    <CardActions className="card-button__container"
                        onClick={(e) => {
                            e.preventDefault()
                            // let checkContain = cart.items.includes(product => product.id)
                            // console.log(checkContain)
                            dispatch(addToCart({
                                id: props.id
                            }))
                        }}

                        >
                        <Button variant='outlined'> buy </Button>
                    </CardActions>
                </Card>
            ) : (
                <div>
                    <h3>{ cardInformation.title }</h3>
                    <img
                        src={ cardInformation.photo }
                        className='card-poster'
                        alt='Loading... '
                        style={
                            {
                                width: '200px',
                                height: '200px'
                            }} />
                    <p>{ cardInformation.description }</p>
                    <p>{ cardInformation.price }</p>
                    <p>{ cardInformation.rating }</p>
                    <p>{ cardInformation.createdAt }</p>
                    <p>{ cardInformation.isSale }</p>
                    <p>{ cardInformation.isInStock }</p>
                    <p>{ cardInformation.isNew }</p>
                    <button onClick={() => {
                        dispatch(addToCart({
                            id: cardInformation.id
                        }))
                    }}>
                        buy
                    </button>
                    <SimilarProduct item={ cardInformation } />
                </div>
            )}
        </>
    )
}