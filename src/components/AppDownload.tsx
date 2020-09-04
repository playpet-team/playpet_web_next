import styled from "@emotion/styled"
import { colors } from "../lib/styles"
import { isMobile } from "react-device-detect";

interface AppDownloadConfig {
    show: boolean
    isFixed?: boolean
}

export default function AppDownload({
    show = true,
    isFixed = true
}: AppDownloadConfig) {
    if (!isMobile) {
        return null;
    }
    return (
        <AppDownloadBlock
            show={show}
            isFixed={isFixed}
        >
            <DownloadLink href="https://playpetme.page.link/d6o5">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Flogo%2Fappicon.png?alt=media&token=cafa521d-de48-4892-8462-eeef82d62888"
                />
                플레이펫 앱 다운로드
            </DownloadLink>
        </AppDownloadBlock>
    )
}

const AppDownloadBlock = styled.div<AppDownloadConfig>`
    cursor: pointer;
    font-size: 24px;
    padding: 18px;
    width: 100%;
    text-align: center;
    background-color: ${colors.yellowKey};
    transition: bottom 300ms ease-out;
    position: ${({ isFixed }) => isFixed ? 'fixed' : 'relative'};
    bottom: ${({ show }) => show ? 0 : -100}px;
    left: 0;
`

const DownloadLink = styled.a`
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-right: 16px;
        border-radius: 8px;
        width: 40px;
        height: 40px;
    }
`

// ${media.large} {
// }
