import {useSelector} from "react-redux";
// import { selectorHelper } from "../../utils/selectorHelper";

export function useTextInput(inputValue) {
    const { data } = useSelector(state => state.catalog)

    const filteredArray = data.filter(card => {
        return card.title.toLowerCase().includes(inputValue)
    })
    return filteredArray
}