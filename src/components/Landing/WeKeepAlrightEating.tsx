import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { breakpoints, colors } from '../../lib/styles';
import { DividerBlock, Text } from '../../styles';
import SectionLayout from './SectionLayout';

function WeKeepAlrightEating() {
    const mobile = useMediaQuery(breakpoints.medium);
    return (
        <SectionLayout
            background={colors.gray}
            baseTextColor="#fff"
            paddingBottom={0}
        >
            <WeKeepAlrightEatingBlock>
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 32 : 44}
                        weight={600}
                        align="center"
                        margin="0 0 16"
                    >
                        사료 정량 배식
                        <br />
                        지켜드리겠습니다
                    </Text>
                </h2>
                <Text size={mobile ? 14 : 20} align="center" margin="0 0 16">
                    간단한 반려동물 정보와 사료만 등록하면
                    <br />
                    계산 된 권장 급여량 가이드 알림부터
                    <br />
                    태그 메시지로 건강 팁 챙기세요.
                </Text>
                <AlrightEatingImg
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F5page.png?alt=media&token=e056983b-d330-49ae-9135-3bd6c7baf92a"
                    alt="정량배식"
                />
                <DividerBlock height={30} />
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 32 : 40}
                        weight={600}
                        align="center"
                        margin="0 0 16"
                    >
                        간단한 반려동물 정보로
                        <br />
                        비만여부 확인
                    </Text>
                </h2>
                <Text size={mobile ? 14 : 20} align="center" margin="0 0 16">
                    등록한 반려동물 정보를 통해 체중만 입력하면
                    <br />
                    견/묘 종에 맞춰진 현재 비만여부 확인 가능합니다.
                </Text>
                <OverFatImg
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F6page.png?alt=media&token=4eac527c-73df-43c8-a912-74cb5923aab9"
                    alt="정량배식"
                />
            </WeKeepAlrightEatingBlock>
        </SectionLayout>
    );
}

export default WeKeepAlrightEating;

const AlrightEatingImg = styled.img`
    max-width: 600px;
    width: 85%;
    margin-top: 60px;
    margin-bottom: 60px;
`;

const OverFatImg = styled.img`
    max-width: 460px;
    width: 80%;
    margin-top: 60px;
    margin-bottom: 60px;
`;

const WeKeepAlrightEatingBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
