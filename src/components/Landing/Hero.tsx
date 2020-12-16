import styled from "@emotion/styled"
import { Text, DividerBlock } from "../../styles";
import { colors, breakpoints } from "../../lib/styles";
import { useMediaQuery } from "@material-ui/core";

export default function Hero() {
    const mobile = useMediaQuery(breakpoints.medium)
    return (
        <HeroBlock>
            <BackgroundSection data-source="https://www.pxfuel.com/en/free-photo-qanng">
                <Content>
                    <LogoImg src="/logo/playpet_logo_w.png" />
                    <DividerBlock height={mobile ? 24 : 120} />
                    <h1>
                        <Text
                            family='GmarketSansMedium'
                            size={mobile ? 32 : 50}
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
                            size={28}
                            color={colors.white}
                        >
                            사료 재고 관리부터 정량 배식까지,
                            <br />
                            이제는 책임감 있게 키울 수 있습니다.
                        </Text>
                    </h2>
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
`;

const BackgroundSection = styled.section`
    background-image: url("https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/web%2Fassets%2Fimages%2Fbackground-section.jpg?alt=media&token=f6a43608-bb93-4b5b-86c8-ce8df8b07398");
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