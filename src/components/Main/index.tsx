import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Divider,
    CardHeader,
} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    {/* Info Card */}
                </Typography>
            </CardContent>
            <CardContent className={classes.cardContent}></CardContent>
        </Card>
    )
}

export default Main
