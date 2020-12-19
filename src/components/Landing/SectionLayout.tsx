import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Layout {
    background?: string;
    baseTextColor?: string;
    children: ReactNode;
    paddingBottom?: number;
}
export default function SectionLayout({
    children,
    background = 'rgba(255, 255, 255, 1)',
    baseTextColor = '#333',
    paddingBottom,
}: Layout) {
    return (
        <SectionLayoutBlock
            background={background}
            baseTextColor={baseTextColor}
            paddingBottom={paddingBottom}
        >
            <ControlWidth>{children}</ControlWidth>
        </SectionLayoutBlock>
    );
}

const ControlWidth = styled.div`
    max-width: 1024px;
`;

const SectionLayoutBlock = styled.section<Layout>`
    display: flex;
    justify-content: center;
    flex: 1;
    color: ${({ baseTextColor }) => baseTextColor};
    background: ${({ background }) => background};
    padding: 80px 32px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;
