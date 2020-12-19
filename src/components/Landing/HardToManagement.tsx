import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import colors from '../../lib/styles/colors'
import { Text, DividerBlock } from "../../styles"
import { breakpoints } from "../../lib/styles"
import { useInView } from 'react-intersection-observer'
import { css } from "@emotion/core"
import { useMediaQuery } from "@material-ui/core"

function HardToManagement() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    const mobile = useMediaQuery(breakpoints.medium)

    return (
        <SectionLayout
            background="#22344F"
            baseTextColor='#fff'
            paddingBottom={0}
        >
            <HardToManagementBlock>
                <h2>
                    <Text
                        family='GmarketSansMedium'
                        size={mobile ? 32 : 44}
                        color={colors.white}
                        weight={600}
                        align='center'
                    >
                        바쁜 일상 속에
                        <br />
                        사료 관리의 어려움
                    </Text>
                </h2>
                <DividerBlock height={24} />
                <ForgotImg
                    src="/images/landing/2page.png"
                    alt="사료구매를 가끔 깜빡해요"
                />
            </HardToManagementBlock>
        </SectionLayout>
    )
}

export default HardToManagement

const HardToManagementBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

const ForgotImg = styled.img`
    max-width: 560px;
    width: 85%;
    margin-top: 20px;
    margin-bottom: 80px;
`
