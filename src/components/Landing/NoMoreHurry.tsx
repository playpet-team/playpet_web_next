import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { breakpoints, colors } from '../../lib/styles';
import { Text } from '../../styles';
import SectionLayout from './SectionLayout';

function NoMoreHurry() {
    const mobile = useMediaQuery(breakpoints.small);
    return (
        <SectionLayout
            background="#EAEAEA"
            baseTextColor={colors.darkGray}
            paddingBottom={0}
        >
            <NoMoreHurryBlock>
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 32 : 44}
                        weight={600}
                        align="center"
                        margin="0 0 16"
                    >
                        더 이상 급하게
                        <br />
                        구매하지 마세요
                    </Text>
                </h2>
                <Text
                    size={mobile ? 14 : 20}
                    color="#999"
                    align="center"
                    margin="0 0 16"
                >
                    매번 구매하는 사료, 급하게 구매하지 마세요.
                    <br />손 쉽게 재고 확인하고 필요할 때마다 구매하세요.
                </Text>
                <FillYourFeedImg
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F3page.png?alt=media&token=82f75c07-74d4-497a-b34f-fa00b7c0eab0"
                    alt="사료 채우기"
                />
            </NoMoreHurryBlock>
        </SectionLayout>
    );
}

export default NoMoreHurry;

const NoMoreHurryBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FillYourFeedImg = styled.img`
    max-width: 540px;
    width: 90%;
    margin-top: 100px;
`;
