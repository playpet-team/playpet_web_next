import { useInView } from 'react-intersection-observer'
import { colors } from "../../lib/styles"
import { Text } from "../../styles"
import { ScreenshotBlock } from "./HardToManagement"
import SectionLayout from "./SectionLayout"

function NoMoreHurry() {
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
                    더 이상 급하게
                    <br />
                    구매하지 마세요
                </Text>
            </h2>
            <Text
                size={18}
                color={colors.white}
                align='center'
                margin='0 0 16'
            >
                매번 구매하는 사료, 급하게 구매하지 마세요.
                <br />
                손 쉽게 재고 확인하고 필요할 때마다 구매하세요.
            </Text>
            {/* <ScreenshotBlock ref={ref} inView={inView}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_1.jpg?alt=media&token=a9b0b135-4b31-496f-aed9-e9cd71f23179"
                    alt="이번에 산 터그장난감 아가가 너무 좋아하네요!"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fabout_screenshot_2.jpg?alt=media&token=0e245a37-9bbd-453a-9164-9b0783b4b4e1"
                    alt="강아지 치석제거 장난감"
                />
            </ScreenshotBlock> */}
        </SectionLayout>
    )
}

export default NoMoreHurry
