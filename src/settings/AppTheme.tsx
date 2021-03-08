import React, { FunctionComponent, ReactNode} from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

interface IProps {
    children: ReactNode
}

const AppTheme: FunctionComponent<IProps> = ({children}: IProps) => {

    const mainTheme = createMuiTheme({

        palette: {
            secondary: {
              main: "#36CA78",
            },
            primary: {
               main: '#3586FF',
            }
        },
        typography: {
            fontFamily: ["'ABC Monument Grotesk Trial'", "sans-serif", "Roboto"].join(","),
            h4: {

            },
            subtitle1: {

            }
        }
    })

    return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>

}

export default React.memo(AppTheme)