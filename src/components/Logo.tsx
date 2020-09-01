import styled from "@emotion/styled"
import { colors } from "../lib/styles"

interface LogoConfig {
    type: 'icon' | 'logo'
    color: 'white' | 'black' | 'blueKey'
    backgroundColor: 'transparent' | 'white' | 'black' | 'blueKey'
    width?: number
}

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
                backgroundColor={backgroundColor}
                width={width}
            />
        </LogoBlock>
    )
}

const logoByType = (type) => {
    let base = 'logo/'
    switch (type) {
        case 'icon': {
            base += 'playpet_icon.png'
            break;
        }
        case 'logo': {
            base += 'playpet_logo.png'
            break;
        }
    }
    return base
}

const getCodeByColor = (color) => {
    switch (color) {
        case 'blueKey': {
            return colors.blueKey
        }
        case 'black': {
            return colors.black
        }
        case 'white':
        default: {
            return colors.white
        }
    }
}

const LogoBlock = styled.div``

const Img = styled.img<Omit<LogoConfig, 'type'>>`
    /* color:  */
`
