import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { useRouter } from 'next/router'
import { firebaseTimeStampToStringStamp, fetcher } from "../../../src/utils"
import useSWR from 'swr'
import BaoLayout from "../../../src/components/bao/BaoLayout"

export default function UserDetail() {
    const { query } = useRouter()
    const [userDetail, setUserDetail] = useState<any>({})
    const { data } = useSWR(
        () => query.uid && `/api/users/${query.uid}`,
        fetcher
    )

    useEffect(() => {
        if (data) {
            setUserDetail(data)
        }
    }, [data])

    return (
        <BaoLayout>
            <UserDetailBlock>
                <UserInformationBlock>
                    {!userDetail.uid && <div>유저가 없습니다</div>}
                    <Row>
                        <KeyText>profilePhoto</KeyText>
                        <ValueText><img width="120px" src={userDetail.profilePhoto} alt="" /></ValueText>
                    </Row>
                    <Row>
                        <KeyText>uid</KeyText>
                        <ValueText>{userDetail.uid}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>method</KeyText>
                        <ValueText>{userDetail.method}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>isLeave</KeyText>
                        <ValueText>{userDetail.isLeave}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>phoneNumber</KeyText>
                        <ValueText>{userDetail.phoneNumber}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>username</KeyText>
                        <ValueText>{userDetail.username}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>email</KeyText>
                        <ValueText>{userDetail.email}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>birthDate</KeyText>
                        <ValueText>{userDetail.birthDate}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>gender</KeyText>
                        <ValueText>{userDetail.gender}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>updatedAt</KeyText>
                        <ValueText>{userDetail.updatedAt && firebaseTimeStampToStringStamp(userDetail.updatedAt).format('YYYY-MM-DD')}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>lastLogin</KeyText>
                        <ValueText>{userDetail.lastLogin && firebaseTimeStampToStringStamp(userDetail.lastLogin).format('YYYY-MM-DD')}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>createdAt</KeyText>
                        <ValueText>{userDetail.createdAt && firebaseTimeStampToStringStamp(userDetail.createdAt).format('YYYY-MM-DD')}</ValueText>
                    </Row>
                </UserInformationBlock>
            </UserDetailBlock>
        </BaoLayout>
    )
}

const UserDetailBlock = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`;

const UserInformationBlock = styled.div``;

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