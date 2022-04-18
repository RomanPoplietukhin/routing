import {useState} from "react";
import {useSelector} from "react-redux";

export function FiltersCategoryItem(props) {
    // console.log(props)
    const {
        selected,
        selectedCategories,
        setSelectedCategories,
        onChange,
        name,
        id  } = props
    // console.log(selectedCategories)
    return (
        <label>
            { name }
            { id }
            <input
                type="checkbox"
                value={ props.id }
                checked={ selectedCategories[id] }
                onChange={onChange}
            />
        </label>
    )
}