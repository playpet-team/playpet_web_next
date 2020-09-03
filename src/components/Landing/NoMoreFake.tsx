import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import { DividerBlock, Text } from "../../styles"
import { colors } from "../../lib/styles"
import { ScreenshotBlock } from "./AboutPlaypet"
import { useInView } from 'react-intersection-observer'

export default function NoMoreFake() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    return (
        <SectionLayout
            background={colors.darkGray}
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
                    margin='0 0 16'
                >
                    더 이상 속지마세요
                </Text>
            </h2>
            <Text
                size={18}
                color={colors.white}
                align='center'
                margin='0 0 16'
            >
                조작된 사진과 별점리뷰는 더 이상 그만!
            </Text>
            <Text
                size={18}
                color={colors.white}
                align='center'
                margin='0 0 40'
            >
                반려인들이 공유한 영상으로 직접 확인하고 구매하세요.
            </Text>
            <ScreenshotBlock ref={ref} inView={inView}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_1.jpg?alt=media&token=a9b0b135-4b31-496f-aed9-e9cd71f23179"
                    alt="이번에 산 터그장난감 아가가 너무 좋아하네요!"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_2.jpg?alt=media&token=0e245a37-9bbd-453a-9164-9b0783b4b4e1"
                    alt="강아지 치석제거 장난감"
                />
            </ScreenshotBlock>
        </SectionLayout>
    )
}
