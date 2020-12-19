import styled from '@emotion/styled';
import AppDownload from '../src/components/AppDownload';
import HardToManagement from '../src/components/Landing/HardToManagement';
import Hero from '../src/components/Landing/Hero';
import NoMoreHurry from '../src/components/Landing/NoMoreHurry';
import BottomContent from '../src/components/Landing/BottomContent';
// import usePageBottom from "../src/hooks/useScrollBottom"
// import PlaypetProducts from "../src/components/Landing/PlaypetProducts"
import Layout from '../src/components/Layout';
import SEO from '../src/components/PlaypetHead';
import AlrightEating from '../src/components/Landing/AlrightEating';
import WeKeepAlrightEating from '../src/components/Landing/WeKeepAlrightEating';

export default function Landing() {
    // const bottom = usePageBottom()
    return (
        <Layout>
            <SEO />
            <LandingBlock>
                <Hero />
                <HardToManagement />
                <NoMoreHurry />
                <AlrightEating />
                <WeKeepAlrightEating />
                <BottomContent />
                <AppDownload />
            </LandingBlock>
        </Layout>
    );
}

const LandingBlock = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
