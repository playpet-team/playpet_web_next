import styled from "@emotion/styled";

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

export const Row = styled.div`
    display: flex;
    padding: 8px 0;
`

export const KeyText = styled.div`
    width: 180px;
    border-right: 1px solid rgba(0,0,0,0.12);
`

export const ValueText = styled.div`
    margin-left: 16px;
`
