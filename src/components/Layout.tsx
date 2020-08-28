/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
// import { baseCSS } from '../lib/styles';
import useAnalytics from '../hooks/useAnalytics';
import PlaypetHead from './PlaypetHead';
import Footer from './Footer';

export interface LayoutProps {
    clearOnTop?: boolean;
    children: React.ReactNode;
    // whiteTextHeader?: boolean;
    // darkMode?: boolean;
    hasFooter?: boolean;
}
function Layout({
    clearOnTop,
    children,
    // whiteTextHeader,
    // darkMode,
    hasFooter = true,
}: LayoutProps) {
    useAnalytics();
    return (
        <React.Fragment>
            <PlaypetHead />
            {/* <Global styles={baseCSS} /> */}
            {/* <Header clearOnTop={clearOnTop} whiteText={whiteTextHeader} darkMode={darkMode} /> */}
            <MainBlock clearOnTop={clearOnTop}>{children}</MainBlock>
            {hasFooter && <Footer />}
        </React.Fragment>
    );
}

export default Layout;

const MainBlock = styled.main<{ clearOnTop: boolean }>`
    min-height: 100vh;
    overflow: hidden;
`;