import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { breakpoints, colors } from '../../lib/styles';
import { Text } from '../../styles';
import SectionLayout from './SectionLayout';

function AlrightEating() {
    const mobile = useMediaQuery(breakpoints.medium);
    return (
        <SectionLayout background="#22344F" paddingBottom={0}>
            <AlrightEatingBlock>
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 32 : 44}
                        color={colors.white}
                        weight={600}
                        align="center"
                        margin="0 0 16"
                    >
                        정량배식을 안하면
                        <br />
                        비만으로 생기는 질병
                    </Text>
                </h2>
                <Text
                    size={mobile ? 14 : 20}
                    color={colors.white}
                    align="center"
                    margin="0 0 16"
                >
                    수의사 88%는 과다 급식이 비만의 원인이지만
                    <br />
                    보호자들이 사료급식 가이드라인을
                    <br />
                    따르지 않는다고 하였습니다.
                </Text>
                <SickYourPetImg
                    src="/images/landing/4page.png"
                    alt="아픈 우리아이"
                />
            </AlrightEatingBlock>
        </SectionLayout>
    );
}

export default AlrightEating;

const AlrightEatingBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SickYourPetImg = styled.img`
    max-width: 480px;
    width: 70%;
    margin-top: 50px;
    margin-bottom: 50px;
`;
