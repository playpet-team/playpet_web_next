import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { Text, DividerBlock } from '../../styles';
import { breakpoints } from '../../lib/styles';

export default function Hero() {
    const mobile = useMediaQuery(breakpoints.medium);
    return (
        <HeroBlock>
            <BackgroundSection data-source="https://www.pxfuel.com/en/free-photo-qanng">
                <Content>
                    <LogoImg src="/logo/playpet_logo_w.png" />
                    <DividerBlock height={mobile ? 24 : 120} />
                    <h1>
                        <Text
                            family="GmarketSansMedium"
                            size={mobile ? 48 : 78}
                            color="transparent"
                            weight={800}
                            align="center"
                        >
                            playpet
                        </Text>
                    </h1>
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
    background-image: url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/web%2Fassets%2Fimages%2Fbackground-section.jpg?alt=media&token=f6a43608-bb93-4b5b-86c8-ce8df8b07398');
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;
const Content = styled.article`
    padding-top: 24px;
    ${breakpoints.medium} {
        padding-top: 10vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
