import React, { useState } from "react";
import styled from "@emotion/styled";
import { Facebook, Instagram, ArrowDownward } from '@material-ui/icons';
import { isMobile } from "react-device-detect";

export default function Footer({ minimumFooter = false }) {
    const [minimum, setMinimum] = useState(minimumFooter)

    if (minimum) {
        return (
            <FooterBlock onClick={() => setMinimum(!minimum)}>
                <Text>플레이펫컴퍼니</Text>
            </FooterBlock>
        )
    }
    return (
        <FooterBlock onClick={() => setMinimum(!minimum)}>
            <BusinessSection>
                <Text>플레이펫컴퍼니&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;대표 : 김관우</Text>
                <Text>사업자등록번호 : 868-18-01356&nbsp;&nbsp;&nbsp;</Text>
                <Text>통신판매번호 : 제2020-서울강남-01093호</Text>
                <Text>주소 : 서울특별시 강남구 테헤란로 425, 5층</Text>
                <Text>고객센터 : support@playpet.me&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;010-9235-0736</Text>
            </BusinessSection>
            <ProvisionSection>
                <Link target="_blank" href="https://docs.google.com/document/d/1kWXTsC_KWR3SNG1T8eCVXTN8O9XY2bz_yeZVmMO5kd4/edit?usp=sharing">이용약관</Link>
                <Link target="_blank" href="https://docs.google.com/document/d/1y9a-1p2gRYxVgXUX2VWyRM_BKRnMcrVGqxbu1JTT0Mw/edit?usp=sharing">개인정보 처리방침</Link>
                <SocialBlock>
                    <a target="_blank" href="https://www.facebook.com/playpet.me/">
                        <Facebook fontSize="large" htmlColor="#666" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/playpet.me">
                        <Instagram fontSize="large" htmlColor="#666" />
                    </a>
                </SocialBlock>
            </ProvisionSection>
        </FooterBlock>
    )
}

const FooterBlock = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f5f6f7;
    flex: 1;
    padding: ${isMobile ? '40px 80px' : '20px'};
    font-size: 13px;
    color: #4B5064;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 24px;
    }
`

const BusinessSection = styled.section``
const ProvisionSection = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1024px) {
        margin-top: 24px;
    }
`
const Text = styled.div`
    padding-bottom: 12px;
`
const Link = styled.a`
    margin-bottom: 12px;
    color: #4B5064;
`

const SocialBlock = styled.div``
