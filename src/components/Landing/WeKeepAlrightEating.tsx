import { useInView } from "react-intersection-observer";
import { colors } from "../../lib/styles";
import { DividerBlock, Text } from "../../styles";
import SectionLayout from "./SectionLayout";

function WeKeepAlrightEating() {
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
                    weight={600}
                    align='center'
                    margin='0 0 16'
                >
                    사료 정량 배식
                    <br />
                    지켜드리겠습니다
                </Text>
            </h2>
            <Text
                size={18}
                align='center'
                margin='0 0 16'
            >
                간단한 반려동물 정보와 사료만 등록하면
                <br />
                계산 된 권장 급여량 가이드 알림부터
                <br />
                태그 메시지로 건강 팁 챙기세요.
            </Text>
            <DividerBlock height={30} />
            <h2>
                <Text
                    family='GmarketSansMedium'
                    size={32}
                    weight={600}
                    align='center'
                    margin='0 0 16'
                >
                    간단한 반려동물 정보로
                    <br />
                    비만여부 확인
                </Text>
            </h2>
            <Text
                size={18}
                align='center'
                margin='0 0 16'
            >
                등록한 반려동물 정보를 통해 체중만 입력하면
                <br />
                견/묘 종에 맞춰진 현재 비만여부 확인 가능합니다.
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

export default WeKeepAlrightEating
