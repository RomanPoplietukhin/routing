import { useSelector } from "react-redux";

export function useSwitch(isFilter, flag) {
    const { data } = useSelector(state => state.catalog)
    if(isFilter) {
        return data.filter(card => {
            return !!card[flag]
        })
    }
}