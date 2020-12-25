import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'

type DetailsProps = {
    title: string
}

export const Details = ({ title }: DetailsProps) => {
    const classes = useStyles()
    const cardClass = title === 'income' ? classes.income : classes.expense

    return (
        <Card className={cardClass}>
            <CardHeader title={title}></CardHeader>
            <CardContent>
                <Typography variant="h5"></Typography>
                {/* <Doughnut data={null} /> */}
            </CardContent>
        </Card>
    )
}

export default Details
