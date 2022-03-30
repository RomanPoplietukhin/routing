import { Skeleton, Grid} from "@mui/material";

export function createSkeletonVisualisation() {
    return (
        <Grid container spacing={1} width='100%'>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 } >
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
            <Grid item md={ 3 }>
                    <Skeleton variant="rectangular" width={280} height={200} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width='90%'/>
                    <Skeleton variant="text" width='80%'/>
            </Grid>
        </Grid>
        )
}