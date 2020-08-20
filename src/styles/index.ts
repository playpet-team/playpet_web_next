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
`;

export const LinkWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #333;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;