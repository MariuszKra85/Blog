import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../utility/theme' 
import Menu from '../components/menu'
import GlobalStyle from '../utility/GlobalStyle';
import Footer from '../components/footer';
import { Helmet } from "react-helmet";


const index = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
            <Helmet>
            <title>Blog</title>
            <meta lang='en' />
            <meta name="description" 
content="This is an example of a meta description. 
This will often show up in search results."></meta>

            </Helmet>
            <GlobalStyle/>
            <Menu></Menu>
            {children}
            <Footer/>
            </>
        </ThemeProvider>
    );
}

export default index;
