import React from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import Head from 'next/head';
import useSignIn from '../../hooks/useSignIn';
import Aside from './Aside';

export interface WalwalLayoutProps {
    clearOnTop?: boolean;
    children: React.ReactNode;
}

function WalwalLayout({ clearOnTop, children }: WalwalLayoutProps) {
    const desktop = useMediaQuery('(min-width:1024px)');
    const user = useSignIn();

    return (
        <WalwalLayoutBlock desktop={desktop}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            {user ? (
                <>
                    <Aside />
                    <Main clearOnTop={clearOnTop}>{children}</Main>
                </>
            ) : (
                <div>로그인</div>
            )}
        </WalwalLayoutBlock>
    );
}

interface IsDesktop {
    desktop: boolean;
}
const WalwalLayoutBlock = styled.div<IsDesktop>`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: ${({ desktop }) => (desktop ? 'row' : 'column')};
`;

interface ClearOnTop {
    clearOnTop: boolean;
}
const Main = styled.main<ClearOnTop>`
    flex: 1;
`;

export default WalwalLayout;
