import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { colors } from "../lib/styles";

export const RowBlock = styled.div`
    /* padding: 8px; */
    margin-bottom: 4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    padding: 8px 0;

    > div {
        flex: 1;
        padding-left: 16px;
        /* width: 20%; */
        overflow: scroll;
    }
`

export const LinkWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #333;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export interface TextProps {
    color?: string;
    padding?: number;
    weight?: number;
    size?: number;
    align?: 'left' | 'center' | 'right'
}
export const Text = styled.div<TextProps>`
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
    padding: ${({ padding }) => padding};
    font-size: ${({ size }) => size}px;
    text-align: ${({ align }) => align};
`
Text.defaultProps = {
    color: colors.black,
    padding: 0,
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
