import React from 'react'
import Details from '../Details'
import { Grid } from '@material-ui/core'

import useStyles from '../../styles'

function App() {
    const classes = useStyles()

    return (
        <Grid
            alignItems="center"
            className={classes.grid}
            container
            spacing={0}
            style={{ height: '100vh' }}
        >
            <Grid item xs={12} sm={4}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={4}>
                Main
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details title="Expense" />
            </Grid>
        </Grid>
    )
}

export default App
