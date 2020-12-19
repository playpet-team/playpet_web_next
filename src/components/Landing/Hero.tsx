import styled from "@emotion/styled"
import { Text, DividerBlock } from "../../styles";
import { colors, breakpoints } from "../../lib/styles";
import { useMediaQuery } from "@material-ui/core";
import { css } from "@emotion/core";
import { useInView } from "react-intersection-observer";

export default function Hero() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    const mobile = useMediaQuery(breakpoints.medium)
    return (
        <HeroBlock ref={ref}>
            <BackgroundSection data-source="iStock-1253685765">
                <Content>
                    <DividerBlock height={mobile ? 24 : 48} />
                    <h1>
                        <Text
                            family='GmarketSansMedium'
                            size={mobile ? 32 : 44}
                            color={colors.white}
                            weight={800}
                            align='center'
                        >
                            우리집 반려동물
                            <br />
                            건강과 사료 관리가
                            <br />
                            쉬워진다!
                        </Text>
                    </h1>
                    <DividerBlock height={24} />
                    <h2>
                        <Text
                            size={mobile ? 14 : 20}
                            color={colors.white}
                        >
                            사료 재고 관리부터 정량 배식까지,
                            <br />
                            이제는 책임감 있게 키울 수 있습니다.
                        </Text>
                    </h2>
                    <AppHomeScreenImg
                        inView={inView}
                        src="/images/landing/1page.png"
                        alt="앱 스크린"
                    />
                </Content>
            </BackgroundSection>
        </HeroBlock>
    )
}

const HeroBlock = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 150px;
`

const BackgroundSection = styled.section`
    background-image: url("/images/landing/hero-overlay.jpg");
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
`
const Content = styled.article`
    padding-top: 24px;
    ${breakpoints.medium} {
        padding-top: 10vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const AppHomeScreenImg = styled.img<{inView: boolean}>`
    position: absolute;
    bottom: 0;
    width: 75%;
    max-width: 470px;

    transform: translateY(140px);
    transition: opacity 800ms ease-out, transform 600ms ease-out;
    opacity: 0;

    ${({ inView }) => inView && css`
        transform: translateY(0);
        opacity: 1;
    `}
`
