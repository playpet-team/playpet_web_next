import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from "../lib/styles"

export interface TextProps {
    family?: 'GmarketSansMedium' | 'Noto Sans KR' | '';
    color?: string;
    padding?: string;
    margin?: string;
    weight?: number;
    size?: number;
    align?: 'left' | 'center' | 'right'
}
export const Text = styled.div<TextProps>`
    font-family: ${({ family }) => family};
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
    padding: ${({ padding }) => padding}px;
    margin: ${({ margin }) => margin}px;
    font-size: ${({ size }) => size}px;
    text-align: ${({ align }) => align};
    cursor: default;
`
Text.defaultProps = {
    family: 'Noto Sans KR',
    color: colors.black,
    padding: '0',
    margin: '0',
    weight: 400,
    size: 12,
    align: 'left',
}

interface DividerProps {
    padding?: string;
    marginTop?: number;
    marginBottom?: number;
    backgroundColor?: string;
    height?: number;
}
export const DividerBlock = styled.div<DividerProps>`
    ${({ padding }) => padding && css`
        padding: ${padding};
    `}
    ${({ marginTop }) => marginTop && css`
        margin-top: ${marginTop}px;
    `}
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom}px;
    `}
    ${({ backgroundColor }) => backgroundColor && css`
        background-color: ${backgroundColor};
    `}
    ${({ height }) => height && css`
        height: ${height}px;
    `}
`;
