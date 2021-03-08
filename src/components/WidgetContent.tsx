import React, {FunctionComponent} from 'react';
import {Box, Card, makeStyles, Typography} from "@material-ui/core";
import {Line} from "react-chartjs-2";
import Avatar from '@material-ui/core/Avatar';
import Badge from "./Badge";
import {IProps} from './Widget'

const useStyles = makeStyles(() => ({
    root: {
        borderTop: '8px',
        borderRight: '8px',
        border: '1px solid #E9E9E9',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    titleFont: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '22.14px'
    },
    timeFont: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#C8C8C8'
    },
    avatar: {
        width: '24px',
        height: '24px'
    },
    text: {
       fontSize: '15px',
       fontWeight: 500,
        marginLeft: '8px'
    },
}))

const WidgetContent: FunctionComponent<Omit<IProps, 'count'>> = ({ chart, title, amount, percentage, time, avatar}) => {

    const classes = useStyles()

    return (
        <Card classes={{
            root: classes.root
        }}>
            <Box px={2} mt={'17px'} mb={'38px'}>
                <Typography className={classes.titleFont} component={'h4'}>
                    {title}
                </Typography>
            </Box>
            <Box px={2} mb={2} display='flex' justifyContent='space-between'>
                <Box display={'flex'} alignItems='center'>
                    <Avatar src={'assets/avatar_geo.png'} className={classes.avatar} />
                    <Typography className={classes.text}>
                        ${amount}
                    </Typography>
                    <Typography color={'secondary'} className={classes.text}>
                        {percentage}%
                    </Typography>
                </Box>
                <Box>
                    <Badge title={'Buy'} backgroundColor={'#36CA78'} color={'#fff'} />
                </Box>
            </Box>

            <Box height={'80px'} ml={2} mr={'3px'}>
                <Line data={{
                    labels: chart.data.labels,
                    datasets: chart.data.datasets
                }}
                      options={chart.options}
                />
            </Box>
            <Box height={'50px'} ml={2} mr={'9px'}>
                <Box display='flex' justifyContent={'space-between'} alignItems={'center'} height='100%'>
                        <Avatar src={avatar} className={classes.avatar} />
                    <Box>
                        <Typography className={classes.timeFont}>
                            {time}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}


export default WidgetContent;