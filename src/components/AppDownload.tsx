import styled from "@emotion/styled"
import { colors } from "../lib/styles"

interface AppDownloadConfig {
    show: boolean
    isFixed?: boolean
}

export default function AppDownload({
    show = true,
    isFixed = true
}: AppDownloadConfig) {
    return (
        <AppDownloadBlock show={show} isFixed={isFixed}>
            플레이펫 앱 다운로드
        </AppDownloadBlock>
    )
}

const AppDownloadBlock = styled.div<AppDownloadConfig>`
    font-size: 24px;
    padding: 24px;
    width: 100%;
    text-align: center;
    background-color: ${colors.yellowKey};
    transition: bottom 300ms ease-out;
    /* display: ${({ show }) => show ? 'flex' : 'none'}; */
    position: ${({ isFixed }) => isFixed ? 'fixed' : 'relative'};
    bottom: ${({ show }) => show ? 0 : -100}px;
    left: 0;
`

// ${media.large} {
// }
