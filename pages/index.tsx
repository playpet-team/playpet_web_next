import styled from "@emotion/styled"
import AppDownload from "../src/components/AppDownload"
import HardToManagement from "../src/components/Landing/HardToManagement"
import Hero from "../src/components/Landing/Hero"
import NoMoreHurry from "../src/components/Landing/NoMoreFake"
import BottomContent from "../src/components/Landing/BottomContent"
import usePageBottom from "../src/hooks/useScrollBottom"
import PlaypetProducts from "../src/components/Landing/PlaypetProducts"
import Layout from "../src/components/Layout"
import SEO from "../src/components/PlaypetHead"
import AlrightEating from "../src/components/Landing/ExplorePlayground"
import WeKeepAlrightEating from "../src/components/Landing/WeKeepAlrightEating"

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch(`${ROOT_URL}/api/playground/explore`)
//     const data: CardModel[] = await res.json()
//     return {
//         props: {
//             data,
//         },
//     }
// }
// export default function Landing({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Landing() {
    const bottom = usePageBottom()

    return (
        <Layout>
            <SEO />
            <LandingBlock>
                <Hero />
                {/* <AboutPlaypet />
                <PlaypetProducts />
                <NoMoreFake /> */}
                <HardToManagement />
                <NoMoreHurry />
                <AlrightEating />
                <WeKeepAlrightEating />
                <BottomContent />
                {/* <AppDownload
                    show={!bottom}
                    isFixed
                /> */}
            </LandingBlock>
        </Layout>
    )
}

const LandingBlock = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`
