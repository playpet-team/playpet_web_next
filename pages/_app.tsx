import NextApp from 'next/app'
import { CacheProvider, Global } from '@emotion/core'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import baseCSS from '../src/styles/baseCSS'

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props
        return (
            <CacheProvider value={cache}>
                <Global styles={baseCSS} />
                <Component {...pageProps} />
            </CacheProvider>
        )
    }
}