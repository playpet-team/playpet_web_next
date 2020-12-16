import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import { DividerBlock, Text } from "../../styles"
import { colors } from "../../lib/styles"
import AppDownload from "../AppDownload"

export default function BottomContent() {
    return (
        <SectionLayout background={colors.primary}>
            <h2>
                <Text
                    family='GmarketSansMedium'
                    size={32}
                    color={colors.white}
                    weight={600}
                    align='center'
                >
                    반려동물의 건강한
                    <br />
                    문화부터 책임감까지
                </Text>
                <Text
                    size={20}
                    color={colors.white}
                    align='center'
                >
                    플레이펫 서비스는 사료 정량배식
                    <br />
                    가이드부터 재고 관리 기능을
                    <br />
                    무료로 제공하고 있습니다.
                    <DividerBlock height={16} />
                    우리 모두가 반려동물의 건강한
                    <br />
                    문화부터 책임감 있는 반려동물 양육
                    <br />
                    문화로 플레이펫이 만들어 가겠습니다
                </Text>
            </h2>
            <AppDownload />
        </SectionLayout>
    )
}
