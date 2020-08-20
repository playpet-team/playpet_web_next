import React from "react";
import styled from "@emotion/styled";

export default function Footer() {
    return (
        <FooterBlock>
            <BusinessSection>
                <Text>플레이펫컴퍼니&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;대표 : 김관우</Text>
                <Text>사업자등록번호 : 868-18-01356&nbsp;&nbsp;&nbsp;</Text>
                <Text>통신판매번호 : -</Text>
                <Text>서울특별시 강남구 테헤란로 425, 5층</Text>
                <Text>고객센터 : support@playpet.me&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;010-9235-0736</Text>
            </BusinessSection>
            <ProvisionSection>
                <Link href="">이용약관</Link>
                <Link href="">개인정보 처리방침</Link>
                <SocialBlock>
                    페북 아이콘
                    <br />
                    인스타 아이콘
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
    padding: 40px 80px;
    font-size: 13px;
    color: #4B5064;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 24px;
    }
`;

const BusinessSection = styled.section``;
const ProvisionSection = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1024px) {
        margin-top: 24px;
    }
`;
const Text = styled.div`
    padding-bottom: 12px;
`;
const Link = styled.a`
    margin-bottom: 12px;
    color: #4B5064;
`;

const SocialBlock = styled.div`
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;