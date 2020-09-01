import styled from "@emotion/styled"
import Layout from "../src/components/Layout"
import Hero from "../src/components/Landing/Hero"
import AboutPlaypet from "../src/components/Landing/AboutPlaypet"
import PlaypetProducts from "../src/components/Landing/PlaypetProducts"
import NoMoreFake from "../src/components/Landing/NoMoreFake"
import BottomContent from "../src/components/Landing/BottomContent"
import AppDownload from "../src/components/AppDownload"

export default function Landing() {
    return (
        <Layout>
            <LandingBlock>
                <Hero />
                <AboutPlaypet />
                <PlaypetProducts />
                <NoMoreFake />
                <BottomContent />
                <AppDownload show isFixed />
            </LandingBlock>
        </Layout>
    )
}

const LandingBlock = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`
