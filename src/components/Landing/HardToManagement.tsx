import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import SectionLayout from './SectionLayout';
import colors from '../../lib/styles/colors';
import { Text, DividerBlock } from '../../styles';
import { breakpoints } from '../../lib/styles';

function HardToManagement() {
    const mobile = useMediaQuery(breakpoints.medium);

    return (
        <SectionLayout
            background="#22344F"
            baseTextColor="#fff"
            paddingBottom={0}
        >
            <HardToManagementBlock>
                <h2>
                    <Text
                        family="GmarketSansMedium"
                        size={mobile ? 32 : 44}
                        color={colors.white}
                        weight={600}
                        align="center"
                    >
                        바쁜 일상 속에
                        <br />
                        사료 관리의 어려움
                    </Text>
                </h2>
                <DividerBlock height={24} />
                <ForgotImg
                    src="/images/landing/2page.png"
                    alt="사료구매를 가끔 깜빡해요"
                />
            </HardToManagementBlock>
        </SectionLayout>
    );
}

export default HardToManagement;

const HardToManagementBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ForgotImg = styled.img`
    max-width: 560px;
    width: 85%;
    margin-top: 20px;
    margin-bottom: 80px;
`;
