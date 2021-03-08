import React, {FunctionComponent} from 'react';
import {Box} from "@material-ui/core";
import WidgetContent from "./WidgetContent";
import WidgetAction from "./WidgetAction";
import {ChartComponentProps} from "react-chartjs-2";

export interface IProps {
    title: string;
    chart: ChartComponentProps
    time: string;
    amount: number;
   percentage: string;
   avatar: string;
   count: number;
}

const Widget: FunctionComponent<IProps> = ({ count, chart, time, title, amount, percentage, avatar }: IProps) => {

    return (
        <Box width={'243px'}>
            <Box width={'100%'} height={'270px'} mx={'1px'} display='flex'>
                <WidgetContent title={title} percentage={percentage} avatar={avatar} chart={chart} time={time} amount={amount} />
            </Box>
            <Box width={'100%'} height={'44px'} mx={'1px'} display={'flex'}>
                <WidgetAction count={count} />
            </Box>
        </Box>
    )
}

export default Widget;