import { useParams } from "react-router";
import { loadProductsItem } from "../../api/catalogItemAPI";
import { Card, CardActions, Button} from "@mui/material";
import { addToCart } from "../../ducks/cart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCard } from "../../components/CreateCard";
import { CreateProductPage } from "../../components/CreateProductPage";
import { SimilarProduct } from "../../components/SimilarProduct";
import { BuyProductButton } from "../../components/BuyProductButton";

export function CatalogItem(props) {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [ cardInformation, setCardInformation ] = useState({})

    useEffect(() => {
        id && loadProductsItem(id)
            .then(data => setCardInformation(data.data))
    }, [id])

    return(
        <>
            { !id  ? (
                <Card>
                    <CreateCard { ...props }/>
                    <BuyProductButton { ...props }/>
                </Card>
            ) : (
                <div style={{  alignItems: 'center'}}>
                    <CreateProductPage {...cardInformation}/>
                    <BuyProductButton { ...cardInformation }/>
                    {/*<button onClick={() => {*/}
                    {/*    dispatch(addToCart({*/}
                    {/*        id: cardInformation.id*/}
                    {/*    }))*/}
                    {/*}}>*/}
                    {/*    buy*/}
                    {/*</button>*/}
                    <SimilarProduct item={ cardInformation } />
                </div>
            )}
        </>
    )
}