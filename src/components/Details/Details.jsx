import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'

function Details() {
    const classes = useStyles()

    return (
        <Card className={classes.income}>
            <CardHeader title="Income"></CardHeader>
            <CardContent>
                <Typography variant="h5"></Typography>
                <Doughnut data={null}/> 
            </CardContent>
        </Card>
    )
}

export default Details
