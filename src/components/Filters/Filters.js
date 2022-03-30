import { Slider, Switch } from '@mui/material';
import {loadCategories} from "../../api/categoriesAPI";
import { useQuery } from "react-query";

export function Filters() {

    const categoriesQuery = useQuery('categories', async () => {
        const response = await loadCategories()
        const { data } = response
        return data
    })

    console.log(categoriesQuery.data)
    return (
        <div>
            <div>
                <label >
                    title search
                    <input type="text" />
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
                <Switch/>
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
                            <input type="checkbox"/>
                        </label>
                    </li>
                    { categoriesQuery.data?.map(category => (
                            <li key={category.id}>
                                <label>
                                    { category.name  }
                                    <input type="checkbox"/>
                                    { category.id }
                                </label>
                            </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}
