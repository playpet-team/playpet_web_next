import styled from '@emotion/styled';
import SectionLayout from './SectionLayout';
import { Text, DividerBlock } from '../../styles';

export default function PlaypetProducts() {
    return (
        <SectionLayout>
            <h2>
                <Text
                    family="Notosans Bold"
                    size={32}
                    weight={600}
                    align="center"
                >
                    필요한 반려용품만
                </Text>
            </h2>
            <DividerBlock height={16} />
            <Text size={18} align="center" margin="0 0 48">
                불필요한 제품만 가득 쌓여있는 반려용품 쇼핑몰은 이제 그만!
                <br />
                반려인들에게 가장 필요한 반려용품만 모아놨습니다.
            </Text>
            <Img
                src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fhealth.jpg?alt=media&token=69511e42-8432-4e00-975c-c31d4337dd98"
                alt="위생용품"
            />
            <DividerBlock height={8} />
            <Text size={16} align="center" margin="0 0 48">
                <Text size={18} align="center" weight={500}>
                    위생용품
                </Text>
                일상에 있어서 반려인들에게 가장 필요한 용품만 선별하였습니다.
            </Text>
            <Img
                src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Ftoy.jpg?alt=media&token=227dc36a-4add-4511-901e-d5500f938bcd"
                alt="장난감"
            />
            <DividerBlock height={8} />
            <Text size={16} align="center" margin="0 0 48">
                <Text size={18} align="center" weight={500}>
                    장난감
                </Text>
                가장 인기있고 장난감만 모여있습니다.
            </Text>
            <Img
                src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Fhand_snack.jpg?alt=media&token=df0999f7-66f7-4557-a03a-cd790eb6db7f"
                alt="수제간식"
            />
            <DividerBlock height={8} />
            <Text size={16} align="center" margin="0 0 48">
                <Text size={18} align="center" weight={500}>
                    수제간식
                </Text>
                알 수 없는 식재료와 공장에서 만든 간식은 취급 하지 않습니다.
            </Text>
            <Text size={18} align="center">
                용품 더 알아보기
            </Text>
        </SectionLayout>
    );
}

const Img = styled.img`
    width: 100%;
`;
