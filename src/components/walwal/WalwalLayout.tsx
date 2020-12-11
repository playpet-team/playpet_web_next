import React from 'react'
import styled from '@emotion/styled'
import Aside from "./Aside"
import { useMediaQuery } from "@material-ui/core"
import Head from 'next/head'
import useSignIn from '../../hooks/useSignIn'

export interface WalwalLayoutProps {
    clearOnTop?: boolean
    children: React.ReactNode
}

function WalwalLayout({
    clearOnTop,
    children,
}: WalwalLayoutProps) {
    const desktop = useMediaQuery('(min-width:1024px)')
    const user = useSignIn()

    return (
        <WalwalLayoutBlock desktop={desktop ? 1 : 0}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            {user ?
                <>
                    <Aside />
                    <Main clearOnTop={clearOnTop}>{children}</Main>
                </>
                : <div>로그인</div>
            }
        </WalwalLayoutBlock>
    )
}

const WalwalLayoutBlock = styled.div<{ desktop: number; }>`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: ${({ desktop }) => desktop ? 'row' : 'column'};
`

const Main = styled.main<{ clearOnTop: boolean }>`
    flex: 1;
    /* min-height: 100vh; */
    /* overflow: hidden; */
`

export default WalwalLayout
