import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { breakpoints, colors } from '../../lib/styles';
import { Text } from '../../styles';
import SectionLayout from './SectionLayout';

function AlrightEating() {
    const mobile = useMediaQuery(breakpoints.small);
    return (
        <SectionLayout background="#22344F" paddingBottom={0}>
            <AlrightEatingBlock>
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 28 : 40}
                        color={colors.white}
                        weight={600}
                        align="center"
                        margin="0 0 16"
                    >
                        {/* 정량배식을 안하면
                        <br />
                        비만으로 생기는 질병 */}
                        비만으로 생기는 질병
                    </Text>
                </h2>
                <Text
                    size={16}
                    color={colors.white}
                    align="center"
                    margin="0 0 16"
                >
                    {/* 수의사 88%는 과다 급식이 비만의 원인이지만
                    <br />
                    보호자들이 사료급식 가이드라인을
                    <br />
                    따르지 않는다고 하였습니다. */}
                    비만의 원인중 88%는
                    <br />
                    보호자들이 사료급식 가이드라인을
                    <br />
                    따르지 않기 때문에 발생합니다.
                </Text>
                <SickYourPetImgWrapper>
                    <SickYourPetImg
                        src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F4page.png?alt=media&token=d48d9ae9-aaeb-4eff-bb04-7602c41a4319"
                        alt="아픈 우리아이"
                    />
                    <SickYourPetImgWarning
                        src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F4page_warning.png?alt=media&token=2479903f-d02e-49d7-b006-6638312fbbed"
                        alt="아픈 우리아이"
                    />
                </SickYourPetImgWrapper>
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

const SickYourPetImgWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 40px;
`;

const SickYourPetImg = styled.img`
    max-width: 480px;
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const SickYourPetImgWarning = styled(SickYourPetImg)`
    position: absolute;
    animation: warning 1250ms infinite;

    @keyframes warning {
        50% {
            filter: drop-shadow(0px 0px 20px #eb3858);
        }
    }
`;
