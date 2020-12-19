import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { colors } from '../lib/styles';

// interface AppDownloadConfig {
//     show?: boolean;
//     isFixed?: boolean;
//     position?: 'top' | 'bottom';
// }

export default function AppDownload() {
    if (!isMobile) {
        return null;
    }
    return (
        <AppDownloadBlock>
            <DownloadLink href="https://playpetme.page.link/d6o5">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Flogo%2Fappicon.png?alt=media&token=cafa521d-de48-4892-8462-eeef82d62888"
                    alt="플레이펫 로고"
                />
                플레이펫 앱 다운로드
            </DownloadLink>
        </AppDownloadBlock>
    );
}

const AppDownloadBlock = styled.div`
    cursor: pointer;
    font-size: 18px;
    padding: 18px;
    width: 100%;
    text-align: center;
    background-color: ${colors.yellowKey};
    transition: bottom 300ms ease-out;
    left: 0;
`;

// const positionByType = (position: 'top' | 'bottom', show: boolean) => {
//     switch (position) {
//         case 'top': {
//             return css`
//                 top: ${show ? 0 : -100}px;
//             `;
//         }
//         case 'bottom': {
//             return css`
//                 bottom: ${show ? 0 : -100}px;
//             `;
//         }
//     }
// };

const DownloadLink = styled.a`
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-right: 16px;
        border-radius: 8px;
        width: 36px;
        height: 36px;
    }
`;

// ${media.large} {
// }
