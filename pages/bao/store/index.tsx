import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { firebaseTimeStampToStringStamp } from "../../src/utils";

export default function StoreDetail() {
    const { uid } = useParams();
    const [storeDetail, setStoreDetail] = useState<any | null>(null);

    useEffect(() => {
        async function loadDetail() {
            // Meteor.call('getstoreDetail', uid, (error: any, result: any) => {
            //     setStoreDetail(result);
            // });
        };
        loadDetail();
    }, []);

    if (storeDetail === null) {
        return <div>로드중...</div>
    }

    return (
        <StoreDetailBlock>
            <StoreInformationBlock>
                <Row>
                    <KeyText>profilePhoto</KeyText>
                    <ValueText><img width="120px" src={storeDetail.profilePhoto} alt="" /></ValueText>
                </Row>
                <Row>
                    <KeyText>uid</KeyText>
                    <ValueText>{storeDetail.uid}</ValueText>
                </Row>
                <Row>
                    <KeyText>method</KeyText>
                    <ValueText>{storeDetail.method}</ValueText>
                </Row>
                <Row>
                    <KeyText>isLeave</KeyText>
                    <ValueText>{storeDetail.isLeave}</ValueText>
                </Row>
                <Row>
                    <KeyText>phoneNumber</KeyText>
                    <ValueText>{storeDetail.phoneNumber}</ValueText>
                </Row>
                <Row>
                    <KeyText>username</KeyText>
                    <ValueText>{storeDetail.username}</ValueText>
                </Row>
                <Row>
                    <KeyText>email</KeyText>
                    <ValueText>{storeDetail.email}</ValueText>
                </Row>
                <Row>
                    <KeyText>birthDate</KeyText>
                    <ValueText>{storeDetail.birthDate}</ValueText>
                </Row>
                <Row>
                    <KeyText>gender</KeyText>
                    <ValueText>{storeDetail.gender}</ValueText>
                </Row>
                <Row>
                    <KeyText>updatedAt</KeyText>
                    <ValueText>{storeDetail.updatedAt && firebaseTimeStampToStringStamp(storeDetail.updatedAt).format('YYYY-MM-DD')}</ValueText>
                </Row>
                <Row>
                    <KeyText>lastLogin</KeyText>
                    <ValueText>{storeDetail.lastLogin && firebaseTimeStampToStringStamp(storeDetail.lastLogin).format('YYYY-MM-DD')}</ValueText>
                </Row>
                <Row>
                    <KeyText>createdAt</KeyText>
                    <ValueText>{storeDetail.createdAt && firebaseTimeStampToStringStamp(storeDetail.createdAt).format('YYYY-MM-DD')}</ValueText>
                </Row>
            </StoreInformationBlock>
        </StoreDetailBlock>
    )
};

const StoreDetailBlock = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`;

const StoreInformationBlock = styled.div``;

const Row = styled.div`
    display: flex;
    padding: 8px 0;
`;

const KeyText = styled.div`
    width: 180px;
    border-right: 1px solid rgba(0,0,0,0.12);
`;

const ValueText = styled.div`
    margin-left: 16px;
`;