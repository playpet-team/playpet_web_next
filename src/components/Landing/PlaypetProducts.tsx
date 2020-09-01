import styled from "@emotion/styled"
import SectionLayout from "./SectionLayout"
import { Text, DividerBlock } from "../../styles"
import { colors } from "../../lib/styles"

export default function PlaypetProducts() {
    return (
        <SectionLayout>
            <h2>
                <Text
                    size={32}
                    weight={600}
                    align='center'
                >
                    필요한 반려용품만
            </Text>
            </h2>
            <DividerBlock height={16} />
            <Text
                size={18}
                align='center'
            >
                불필요한 제품만 가득 쌓여있는 반려용품 쇼핑몰은 이제 그만!<br />
                반려인들에게 가장 필요한 반려용품만 모아놨습니다.
            </Text>
            <DividerBlock height={16} />
            image
            <Text
                size={16}
                align='center'
            >
                <Text size={18} align='center' weight={500}>위생용품</Text>
                일상에 있어서 반려인들에게 가장 필요한 용품만 선별하였습니다.
            </Text>
            <DividerBlock height={16} />
            image
            <Text
                size={16}
                align='center'
            >
                <Text size={18} align='center' weight={500}>장난감</Text>
                가장 인기있고 장난감만 모여있습니다.
            </Text>
            <DividerBlock height={16} />
            image
            <Text
                size={16}
                align='center'
            >
                <Text size={18} align='center' weight={500}>수제간식</Text>
                알 수 없는 식재료와 공장에서 만든 간식은 취급 하지 않습니다.
            </Text>
            <DividerBlock height={16} />
            <Text
                size={18}
                align='center'
            >
                용품 더 알아보기
            </Text>
        </SectionLayout>
    )
}
