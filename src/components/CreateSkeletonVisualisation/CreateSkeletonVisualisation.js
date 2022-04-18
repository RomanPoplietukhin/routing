import { Skeleton, Grid} from "@mui/material";
import {useState} from "react";

export function CreateSkeletonVisualisation() {
        const [ amount ] = useState(Array(12).fill({
                posterImitate: 'rectangular',
                textImitate: 'text',
                width: 290,
                height: 300,
                90: '90%',
                80: '80%',
        }))
    return (
        <Grid container spacing={1} width='100%'>
                { amount.map(skeleton => (
                    <Grid item md={ 3 } key={ Math.random() }>
                            <Skeleton
                                variant={ skeleton.posterImitate}
                                width={ skeleton.width }
                                height={ skeleton.height }/>
                            <Skeleton variant={ skeleton.textImitate } />
                            <Skeleton variant={ skeleton.textImitate } />
                            <Skeleton variant={ skeleton.textImitate } width={ skeleton[90] }/>
                            <Skeleton variant={ skeleton.textImitate } width={ skeleton[80] } />
                    </Grid>
                )) }
        </Grid>
        )
}