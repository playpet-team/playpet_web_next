import React from 'react'
import styled from '@emotion/styled'
import Aside from "./Aside"
import { useMediaQuery } from "@material-ui/core"
// import { adminFirebaseInit } from '../../utils/firebaseInit'
// import { isServer } from '../../utils'
// console.log("isServer-----", isServer());
// if (isServer()) {
//     console.log('--------------')
//     // adminFirebaseInit();
// }

export interface BaoLayoutProps {
    clearOnTop?: boolean
    children: React.ReactNode
}


function BaoLayout({
    clearOnTop,
    children,
}: BaoLayoutProps) {
    const desktop = useMediaQuery('(min-width:1024px)')

    return (
        <BaoLayoutBlock desktop={desktop ? 1 : 0}>
            <Aside />
            <Main clearOnTop={clearOnTop}>{children}</Main>
        </BaoLayoutBlock>
    )
}

const BaoLayoutBlock = styled.div<{ desktop: number; }>`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: ${({ desktop }) => desktop ? 'row' : 'column'};
`

const Main = styled.main<{ clearOnTop: boolean }>`
    flex: 1;
    min-height: 100vh;
    overflow: hidden;
`

export default BaoLayout
