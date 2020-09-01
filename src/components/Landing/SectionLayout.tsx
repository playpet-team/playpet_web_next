import styled from "@emotion/styled"

interface Layout {
    background?: string
    baseTextColor?: '#fff' | '#333'
    children: React.ReactNode
}
export default function SectionLayout({
    children,
    background = 'rgba(255, 255, 255, 1)',
    baseTextColor = '#333'
}: Layout) {
    return (
        <SectionLayoutBlock
            background={background}
            baseTextColor={baseTextColor}
        >
            {children}
        </SectionLayoutBlock>
    )
}

const SectionLayoutBlock = styled.section<Layout>`
    flex: 1;
    padding: 48px;
    color: ${({ baseTextColor }) => baseTextColor};
    background: ${({ background }) => background};
`
