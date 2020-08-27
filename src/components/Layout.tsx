/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { baseCSS } from '../lib/styles';
import useAnalytics from '../hooks/useAnalytics';
import PlaypetHead from './PlaypetHead';

const MainBlock = styled.main<{ clearOnTop: boolean }>`
  min-height: 100vh;
  overflow: hidden;
`;

export interface LayoutProps {
    clearOnTop?: boolean;
    children: React.ReactNode;
    // whiteTextHeader?: boolean;
    // darkMode?: boolean;
    // noFooter?: boolean;
}

function Layout({
    clearOnTop,
    children,
    // whiteTextHeader,
    // darkMode,
    // noFooter,
}: LayoutProps) {
    useAnalytics();
    return (
        <React.Fragment>
            <PlaypetHead />
            <Global styles={baseCSS} />
            {/* <Header clearOnTop={clearOnTop} whiteText={whiteTextHeader} darkMode={darkMode} /> */}
            <MainBlock clearOnTop={clearOnTop}>{children}</MainBlock>
            {/* {!noFooter && <Footer />} */}
        </React.Fragment>
    );
}

export default Layout;
