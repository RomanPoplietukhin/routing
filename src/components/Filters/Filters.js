import { Slider, Switch } from '@mui/material';
import {loadCategories} from "../../api/categoriesAPI";
import { useQuery } from "react-query";
import { FiltersCategoryItem } from "../FiltersCategoryItem";
import {useSelector} from "react-redux";
import {useEffect, useState, useMemo} from "react";

export function Filters({ value, setValue, isNew, setIsNew, selectedCategories, setSelectedCategories }) {
    const { data } = useSelector(state => state.catalog)
    const categoriesQuery = useQuery('categories', async () => {
        const response = await loadCategories()
        const { data } = response
        return data
    })
    // const memo = useMemo(() => {
    //     const map = {}
    //     categoriesQuery.data?.forEach( category => (
    //         map[category.id] = true
    //     ))
    //     return map
    // }, [categoriesQuery.data])
    //
    // console.log(memo)

    return (
        <div>
            <div>
                <label >
                    title search
                    <input type="text"
                           value={ value }
                           onChange={(e) => setValue(e.target.value) }
                    />
                </label>
            </div>
            <div>
                price
                <Slider/>
            </div>
            <div>
                raiting
                <Slider/>
            </div>
            <div>
                new
                <Switch value={ isNew } onChange={() => setIsNew(!isNew)}/>
            </div>
            <div>
                sale
                <Switch/>
            </div>
            <div>
                <ul >
                    <li>
                        <label>
                            all
                            <input type="checkbox" />
                        </label>
                    </li>
                    { categoriesQuery.data?.map(category => (
                            <li key={category.id}>
                               <FiltersCategoryItem
                                   {...category}
                                   selectedCategories={ selectedCategories }
                                   selected={ selectedCategories[category.id] }
                                   onChange={() => {
                                        setSelectedCategories({
                                            ...selectedCategories,
                                            [category.id]: !selectedCategories[category.id]
                                        })
                                   }}
                                   setSelectedCategories={ setSelectedCategories }
                               />
                            </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}
