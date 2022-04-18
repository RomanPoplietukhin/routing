import { OrderFirstStep } from "../../components/OrderFirstStep"
import {useDispatch, useSelector} from "react-redux";
// import {createCard} from "../../utils/cardGenerate";
import { CreateCard } from "../../components/CreateCard";
import {Button, Card, CardActions, Grid, Box} from '@mui/material'
import {increment, decrement, initialState, removeFromCart, reset} from "../../ducks/cart";
import {useMemo, useState} from "react";

export function Cart() {
    const [ orderIsOpen, setOrderIsOpen ] = useState(false)

    const { data } = useSelector(state => state.catalog)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    // const cartList =  useMemo(() => {
    //     return [];
    // }, [])
    const cartList = [];
    console.log('---------------------Cart render', cartList)
    data.forEach(el => {
        for(let item of cart.items) {
            if(el.id === item.id) {
                cartList.push({
                    ...el,
                    amount: item.amount
                })
            }
        }
    })
    return(
        <Grid container spacing={1}>
            { cartList.map(el => (
                <Grid md={ 3 } key={ el.id } item >
                    <Card >
                        <CreateCard {...el} />
                        <CardActions>
                            <h2>{el.amount}</h2>
                            <Button
                                variant='outlined'
                                onClick={() => dispatch(removeFromCart({
                                    id: el.id
                                }))}
                            >delete</Button>
                        </CardActions>
                      <Box>
                          <CardActions>
                              <Button
                                  variant='outlined'
                                  onClick={() => dispatch(increment({
                                      id: el.id,
                                      amount: cart.items.amount
                                  })) }
                              > + </Button>
                          </CardActions>
                          <CardActions>
                              <Button
                                  variant='outlined'
                                  onClick={() => dispatch(decrement({
                                      id: el.id,
                                      amount: cart.items.amount
                                  })) }
                              > - </Button>
                          </CardActions>
                      </Box>
                    </Card>
                </Grid>
            )) }
            { orderIsOpen &&  <OrderFirstStep  orderIsOpen={ orderIsOpen } setOrderIsOpen={ setOrderIsOpen }/>  }
            <div>
                <button onClick={() => setOrderIsOpen(!orderIsOpen)}>
                    order
                </button>
                <button onClick={() => dispatch(reset({
                    items: initialState.items
                }))}>
                    reset
                </button>
            </div>
        </Grid>
    )
}