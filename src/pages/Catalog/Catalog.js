import { Filters } from "../../components/Filters"
import { CatalogItem} from "../CatalogItem";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import catalog, { loadProductsList } from "../../ducks/catalog";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { Grid, Paper } from "@mui/material";
import { CreateSkeletonVisualisation } from "../../components/CreateSkeletonVisualisation";
import { useTextInput } from "../../hooks/useTextInput";
import { useSwitch } from "../../hooks/useSwitch";

export function Catalog() {
    const { data } = useSelector(state => state.catalog)
    const dispatch = useDispatch()
// filtration of titles ---------------------------------------------------------
    const [ inputTextValue, setInputTextValue ] = useState('')
    const [ switchF, setSwitchF ] = useState(false)//test
    const [ isChecked, setIsChecked ] = useState({})

    const filteredData = useTextInput(inputTextValue)
    const filteredFromSwitch = useSwitch(switchF,'isNew') // test
    // const a = data.filter(product => {
    //     return product.categories.find(category => {
    //         return category in isChecked
    //        for(let item in isChecked) {
    //            if (isChecked[item]) return category ===  item
    //            // if(!isChecked[item]) return
    //
    //        }
    //
    //     })
    //     // return product.categories.includes(category =>
    //     //     Object.keys(isChecked).forEach(el => el === category)
    //     // )
    // })


// pagination ---------------------------------------------------------------------
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ productsPerPage ] = useState(12)

    const endIndexOfData = currentPage * productsPerPage;
    const startIndexOfData = endIndexOfData - productsPerPage;
    const currentPostsList = filteredData.slice(startIndexOfData, endIndexOfData);
    const setPaginationPage = (number) => setCurrentPage(number)

    // console.log(filteredData)
//filters state -------------------------------------------------------------------
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        dispatch(loadProductsList)
    }, [dispatch])

    // useEffect(() => {
    //     currentPostsList = filteredData
    // }, [filteredData])

    return(
        <>
            <div className="filters-container">
                <button onClick={() => setIsOpen(!isOpen)}>
                    { isOpen ? 'close' : 'open' }
                </button>
                { isOpen &&
                    <Filters
                        selectedCategories={ isChecked }
                        setSelectedCategories={ setIsChecked }
                        isNew={ switchF }
                        setIsNew={ setSwitchF }
                        value={ inputTextValue }
                        setValue={ setInputTextValue }
                    /> }
            </div>
            <Grid container spacing={ 1 }>
                { !currentPostsList.length ? (
                    <div>
                        <CreateSkeletonVisualisation/>
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