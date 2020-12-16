import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import colors from '../../lib/styles/colors'
import { Text, DividerBlock } from "../../styles"
import { breakpoints } from "../../lib/styles"
import { useInView } from 'react-intersection-observer'
import { css } from "@emotion/core"

function HardToManagement() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <SectionLayout
            background={colors.primary}
            baseTextColor='#fff'
            paddingBottom={0}
        >
            <h2>
                <Text
                    family='GmarketSansMedium'
                    size={32}
                    color={colors.white}
                    weight={600}
                    align='center'
                >
                    바쁜 일상 속에
                    <br />
                    사료 관리의 어려움
                </Text>
            </h2>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                사료구매를 가끔 깜빡할 때가 있어요...!
            </Text>
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                매번급하게 매장이나 빠른배송 신청할 때마다
                <br />
                우리 아이에게 항상 미안하더라고요..
            </Text>
        </SectionLayout>
    )
}

export default HardToManagement

export const ScreenshotBlock = styled.div<{ inView?: boolean }>`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    align-items: flex-start;
    height: auto;

    > img {
        width: 45%;
        /* max-height: 260px; */
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        opacity: 0;
        transform: translateY(-70px);
        transition: opacity 800ms ease-out, transform 600ms ease-out;

        ${({ inView }) => inView && css`
            transform: translateY(0);
            opacity: 1;
        `}

        ${breakpoints.medium} {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
    }
`
