import { useInView } from "react-intersection-observer";
import { colors } from "../../lib/styles";
import { Text } from "../../styles";
import SectionLayout from "./SectionLayout";

function AlrightEating() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    return (
        <SectionLayout
            background={colors.gray}
            baseTextColor='#fff'
            paddingBottom={0}
        >
            <h2>
                <Text
                    family='GmarketSansMedium'
                    size={32}
                    color={colors.black}
                    weight={600}
                    align='center'
                    margin='0 0 16'
                >
                    정량배식을 안하면
                    <br />
                    비만으로 생기는 질병
                </Text>
            </h2>
            <Text
                size={18}
                color={colors.black}
                align='center'
                margin='0 0 16'
            >
                수의사 88%는 과다 급식이 비만의 원인이지만
                <br />
                보호자들이 사료급식 가이드라인을
                <br />
                따르지 않는다고 하였습니다.
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

export default AlrightEating
