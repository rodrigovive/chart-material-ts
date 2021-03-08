import React, {FunctionComponent} from 'react';
import {Box} from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core';

interface IProps {
    title: string,
    backgroundColor: string,
    color: string
}


const useStyles = makeStyles<Theme, Omit<IProps, 'title'>>(theme => ({
    root: {
        padding: '3px 6px',
        fontSize: 12,
        fontWeight: 700,
        height: 23,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props => props.backgroundColor,
        color: props => props.color
    }
}));

const Badge: FunctionComponent<IProps> = ({title, backgroundColor, color}: IProps) => {

    const classes = useStyles({
        backgroundColor,
        color
    })
    return <Box className={classes.root}>
        {title}
    </Box>


}

export default Badge