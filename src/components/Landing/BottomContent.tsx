import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import { Text } from "../../styles"
import { colors } from "../../lib/styles"

export default function BottomContent() {
    return (
        <SectionLayout>
            <h2>
                <Text
                    size={32}
                    color={colors.black}
                    weight={600}
                    align='center'
                >
                    사랑하는 반려동물과 함께 PLAY 하세요
                </Text>
            </h2>

        </SectionLayout>
    )
}
