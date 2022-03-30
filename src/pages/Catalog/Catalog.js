import { Filters } from "../../components/Filters"
import { CatalogItem} from "../CatalogItem";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadProductsList } from "../../ducks/catalog";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { Grid, Paper } from "@mui/material";
import { createSkeletonVisualisation } from "../../utils/skeleton";

export function Catalog() {
    const { data } = useSelector(state => state.catalog)
    const dispatch = useDispatch()

    const [ isOpen, setIsOpen ] = useState(false)

    const [ currentPage, setCurrentPage ] = useState(1)
    const [ productsPerPage ] = useState(12)

    const endIndexOfData = currentPage * productsPerPage;
    const startIndexOfData = endIndexOfData - productsPerPage;
    const currentPostsList = data.slice(startIndexOfData, endIndexOfData);

    const setPaginationPage = (number) => setCurrentPage(number)

    useEffect(() => {
        dispatch(loadProductsList)
    }, [dispatch])
    return(
        <>

            <div className="filters-container">
                <button onClick={() => setIsOpen(!isOpen)}>
                    { isOpen ? 'close' : 'open' }
                </button>
                { isOpen &&  <Filters/> }
            </div>
            <Grid container spacing={ 1 }>
                { !currentPostsList.length ? (
                    <div>
                        { createSkeletonVisualisation() }
                        {/*<Skeleton*/}
                        {/*    animation='wave'*/}
                        {/*    variant='rectangular'*/}
                        {/*    width={40}*/}
                        {/*    height={140}*/}
                        {/*/>*/}
                    </div>
                ) :(
                    currentPostsList.map(product => (
                        <Grid
                            md={ 3 }
                            className="product-card"
                            key={ product.id }
                            item
                        >
                            <Grid item>
                                <Paper>
                                    <Link to={ `/catalog/${product.id}`}>
                                        <CatalogItem {...product} />
                                    </Link>
                                </Paper>
                            </Grid>
                        </Grid>
                    ))
                ) }
            </Grid>
            <div>
                <Pagination
                    data={ data.length }
                    setPaginationPage={ setPaginationPage }
                    productsPerPage={ productsPerPage }
                />
            </div>
        </>
    )
}