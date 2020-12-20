import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../utility/theme' 
import Menu from '../components/menu'
import GlobalStyle from '../utility/GlobalStyle';


const index = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
            <GlobalStyle/>
            <Menu></Menu>
            {children}
            </>
        </ThemeProvider>
    );
}

export default index;
