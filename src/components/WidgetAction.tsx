import React, {FunctionComponent} from 'react';
import {Box, Card, Grid, makeStyles, Typography} from "@material-ui/core";
import LikeIcon from "./LikeIcon";
import ShareIcon from "./ShareIcon";
import IconButton from '@material-ui/core/IconButton';
import {IProps} from './Widget'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'flex',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    actionFont: {
        fontSize: '12px',
        fontWeight: 500,
        color: '#C8C8C8'
    }

}))

const WidgetAction: FunctionComponent<Pick<IProps, 'count'>> = ({count}) => {

    const classes = useStyles()

    return (
        <Card classes={{
            root: classes.root
        }} >
            <Grid container justify={'space-between'} alignItems='center'>
                <Box ml={'21px'} width={'38px'}>
                    <Grid container justify='space-between' alignItems='center'>

                        <IconButton aria-label="like" disableRipple size={'small'}>
                        <LikeIcon />
                        </IconButton>
                        <Typography className={classes.actionFont}>{count}</Typography>
                    </Grid>
                </Box>
                <Box mr={'17px'}>

                    <IconButton aria-label="share" disableRipple size={'small'}>
                        <ShareIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Card>
    )
}

export default WidgetAction