import React, {FunctionComponent} from 'react';
import {Container, Typography, Box, useTheme} from "@material-ui/core";
import exampleData from "../../data/example";
import Widget from "../../components/Widget";

const Dashboard: FunctionComponent = () => {

    const theme = useTheme()

    const data = {
        title: 'TA stars are aligned. It’s time to buy the bottom the folks ',
        chart: {
            options: exampleData.options,
            data: {
                labels: exampleData.labels,
                datasets: exampleData.datasets.map(obj => ({
                    ...obj,
                    borderColor: theme.palette.primary.main
                })),
            },
        },
        amount: 1373.54,
        percentage: '0.51',
        time: '40s ago',
        avatar: 'assets/avatar.png',
        count: 12
    }

    return <Container fixed>
        <Box my={{
            xs: 3
        }}>
            <Typography align='center'>
                Render a chart
            </Typography>
        </Box>

        <Widget
            count={data.count}
            chart={data.chart}
            time={data.time}
            title={data.title} amount={data.amount} percentage={data.percentage} avatar={data.avatar} />
    </Container>
}

export default Dashboard