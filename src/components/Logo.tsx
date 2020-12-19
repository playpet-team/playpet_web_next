import styled from '@emotion/styled';
// import { colors } from '../lib/styles';

interface LogoConfig {
    type: 'icon' | 'logo';
    color: 'white' | 'black' | 'blueKey';
    backgroundColor: 'transparent' | 'white' | 'black' | 'blueKey';
    width?: number;
}

const logoByType = (type) => {
    let base = 'logo/';
    switch (type) {
        case 'icon': {
            base += 'playpet_icon.png';
            break;
        }
        default:
        case 'logo': {
            base += 'playpet_logo.png';
            break;
        }
    }
    return base;
};

export default function Logo({
    type = 'logo',
    color = 'white',
    backgroundColor = 'transparent',
    width = 192,
}: LogoConfig) {
    return (
        <LogoBlock>
            <Img
                color={color}
                src={logoByType(type)}
                style={{
                    backgroundColor,
                }}
                width={width}
            />
        </LogoBlock>
    );
}

// const getCodeByColor = (color) => {
//     switch (color) {
//         case 'blueKey': {
//             return colors.primary;
//         }
//         case 'black': {
//             return colors.black;
//         }
//         case 'white':
//         default: {
//             return colors.white;
//         }
//     }
// };

const LogoBlock = styled.div``;

const Img = styled.img`
    /* color:  */
`;
