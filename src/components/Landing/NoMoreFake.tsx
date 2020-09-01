import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import { DividerBlock, Text } from "../../styles"
import { colors } from "../../lib/styles"

export default function NoMoreFake() {
    return (
        <SectionLayout background={colors.darkGray} baseTextColor='#fff'>
            <h2>
                <Text
                    size={32}
                    color={colors.white}
                    weight={600}
                    align='center'
                >
                    더 이상 속지마세요
                </Text>
            </h2>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                조작된 사진과 별점리뷰는 더 이상 그만!
            </Text>
            <DividerBlock height={16} />
            <Text
                size={18}
                color={colors.white}
                align='center'
            >
                반려인들이 공유한 영상으로 직접 확인하고 구매하세요.
            </Text>
            <DividerBlock height={16} />
            screenshot
        </SectionLayout>
    )
}
