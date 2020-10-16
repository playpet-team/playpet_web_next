import styled from "@emotion/styled"
import AppDownload from "../src/components/AppDownload"
import AboutPlaypet from "../src/components/Landing/AboutPlaypet"
import BottomContent from "../src/components/Landing/BottomContent"
import Hero from "../src/components/Landing/Hero"
import NoMoreFake from "../src/components/Landing/NoMoreFake"
import PlaypetProducts from "../src/components/Landing/PlaypetProducts"
import Layout from "../src/components/Layout"
import SEO from "../src/components/PlaypetHead"
import usePageBottom from "../src/hooks/useScrollBottom"

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
                {/* <ExplorePlayground data={data} /> */}
                {/* <BottomContent /> */}
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
