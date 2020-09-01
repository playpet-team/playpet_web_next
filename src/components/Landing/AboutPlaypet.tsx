import SectionLayout from "./SectionLayout"
import colors from '../../lib/styles/colors'
import { Text, DividerBlock } from "../../styles"

export default function AboutPlaypet() {
    return (
        <SectionLayout
            background={colors.blueKey}
            baseTextColor='#fff'
        >
            <h2>
                <Text
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
            <DividerBlock height={16} />
            screenshot
        </SectionLayout>
    )
}
