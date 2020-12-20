import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { css } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import { Text, DividerBlock } from '../../styles';
import { colors, breakpoints } from '../../lib/styles';

export default function Hero() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const mobile = useMediaQuery(breakpoints.small);
    return (
        <HeroBlock ref={ref}>
            <BackgroundSection data-source="iStock-1253685765">
                <Content>
                    <DividerBlock height={mobile ? 40 : 60} />
                    <h1>
                        <Text
                            family="Notosans Bold"
                            size={mobile ? 26 : 48}
                            color={colors.white}
                            weight={800}
                            align="center"
                        >
                            우리집 반려동물
                            <br />
                            건강과 사료 관리가
                            <br />
                            쉬워진다
                            {/* 반려동물 사료관리가
                            <br />
                            쉬워지는 방법 */}
                            {/* 건강한 반려동물을 위한
                            <br />더 나은 생활 필수앱 */}
                        </Text>
                    </h1>
                    <DividerBlock height={24} />
                    <h2>
                        <Text size={16} color={colors.white}>
                            {/* 사료 재고 관리부터 정량 배식까지,
                            <br />
                            이제는 책임감 있게 키울 수 있습니다. */}
                            {/* 반려동물을 위한 건강한 문화,
                            <br />
                            우리 함께 만들어요 */}
                        </Text>
                    </h2>
                    <AppHomeScreenImg
                        inView={inView}
                        src="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2F1page.png?alt=media&token=88df33c9-3d80-4e5a-a83b-56019ad9b8bc"
                        alt="앱 스크린"
                    />
                </Content>
            </BackgroundSection>
        </HeroBlock>
    );
}

const HeroBlock = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 150px;
`;

const BackgroundSection = styled.section`
    background-image: url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Fimages%2Flanding%2Fhero-overlay.jpg?alt=media&token=6307ee51-a8ea-4867-863f-6cc7c38258bb');
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
`;
const Content = styled.article`
    padding-top: 24px;
    ${breakpoints.small} {
        padding-top: 10vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

interface InView {
    inView: boolean;
}
const AppHomeScreenImg = styled.img<InView>`
    position: absolute;
    bottom: 0;
    width: 75%;
    max-width: 470px;

    transform: translateY(120px);
    transition: opacity 600ms ease-out, transform 800ms ease-out;
    opacity: 0;

    ${({ inView }) =>
        inView &&
        css`
            transform: translateY(0);
            opacity: 1;
        `}
`;
