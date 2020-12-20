import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { css } from '@emotion/core';
import { useMediaQuery } from '@material-ui/core';
import SectionLayout from './SectionLayout';
import colors from '../../lib/styles/colors';
import { Text, DividerBlock } from '../../styles';
import { breakpoints } from '../../lib/styles';

function HardToManagement() {
    const mobile = useMediaQuery(breakpoints.small);
    const [ref, inView] = useInView();
    return (
        <SectionLayout
            background="#22344F"
            baseTextColor="#fff"
            paddingBottom={0}
        >
            <HardToManagementBlock ref={ref}>
                <h2>
                    <Text
                        family="Notosans Bold"
                        size={mobile ? 28 : 40}
                        color={colors.white}
                        weight={600}
                        align="center"
                    >
                        {/* 바쁜 일상 속에
                        <br />
                        사료 관리의 어려움 */}
                        바쁜 일상 속
                        <br />
                        사료 관리의 어려움
                    </Text>
                </h2>
                <DividerBlock height={24} />
                <ForgotBubbleImg
                    inView={inView}
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F2page_bubble.png?alt=media&token=0cd7129a-f5b0-4275-9afa-d265e324f660"
                    alt="사료구매를 가끔 깜빡해요"
                />
                <ForgotBgImg
                    src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F2page_bg_new.png?alt=media&token=59868e78-19df-47a5-89de-087907880088"
                    alt="사료구매를 가끔 깜빡해요"
                />
            </HardToManagementBlock>
        </SectionLayout>
    );
}

export default HardToManagement;

const HardToManagementBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ForgotBgImg = styled.img`
    max-width: 560px;
    width: 85%;
    margin-top: 20px;
    margin-bottom: 80px;
`;

interface BubbleProps {
    inView: boolean;
}
const ForgotBubbleImg = styled(ForgotBgImg)<BubbleProps>`
    margin: 0;
    transform: translateY(60px) scale(0.5);
    transition: opacity 800ms ease-out, transform 400ms ease-out;
    opacity: 0;

    ${({ inView }) =>
        inView &&
        css`
            transform: translateY(0) scale(1);
            opacity: 1;
        `}
`;
