import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import colors from '../../lib/styles/colors'
import { Text, DividerBlock } from "../../styles"
import { breakpoints } from "../../lib/styles"

export default function AboutPlaypet() {
    return (
        <SectionLayout
            background={colors.blueKey}
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
                    반려동물과 함께하는 숏비디오
                </Text>
            </h2>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                평범한 반려동물 일상을<br />
                특별한 의미를 더하는 순간,
            </Text>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                내가 키우는 반려동물 일상을<br />짧은 영상 하나로 행복이<br />가득한 하루를 완성해 보세요!
            </Text>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                시작하기 {'>'}
            </Text>
            <DividerBlock height={40} />
            <ScreenshotBlock>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_1.jpg?alt=media&token=a9b0b135-4b31-496f-aed9-e9cd71f23179"
                    alt="이번에 산 터그장난감 아가가 너무 좋아하네요!"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_2.jpg?alt=media&token=0e245a37-9bbd-453a-9164-9b0783b4b4e1"
                    alt="우리 메이 드디어 손 가능!"
                />
            </ScreenshotBlock>
        </SectionLayout>
    )
}

export const ScreenshotBlock = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;

    > img {
        max-width: 45%;
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;

        ${breakpoints.medium} {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
    }
`
