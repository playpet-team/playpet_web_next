import styled from "@emotion/styled"
import Layout from "../src/components/Layout"

export default function Landing() {
  return (
    <Layout>
      <LandingBlock>
        <BackgroundSection data-source="https://www.pxfuel.com/en/free-photo-qanng">
          <LogoImg src="/logo/playpet_logo_w.png" />
        </BackgroundSection>
      </LandingBlock>
    </Layout>
  )
}

const LandingBlock = styled.div`
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 300px;
`;

const BackgroundSection = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/playpet-5b432.appspot.com/o/web%2Fassets%2Fimages%2Fbackground-section.jpg?alt=media&token=0c05e31a-563d-4b38-91bd-14f3a19be9c3");
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
