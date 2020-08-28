import NextApp from 'next/app'
import { CacheProvider, Global } from '@emotion/core'
import CssBaseline from '@material-ui/core/CssBaseline';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import baseCSS from '../src/styles/baseCSS'

export default class App extends NextApp {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <CacheProvider value={cache}>
                <Global styles={baseCSS} />
                <CssBaseline />
                <Component {...pageProps} />
            </CacheProvider>
        )
    }
}