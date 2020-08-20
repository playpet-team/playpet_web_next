import React, { useEffect, useState, useCallback } from "react"
import styled from "@emotion/styled"
import { firebaseTimeStampToStringStamp, fetcher } from "../../../src/utils"
import { TextField, Button } from "@material-ui/core"
import { RowBlock, LinkWrapper } from '../../../src/styles'
import BaoLayout from "../../../src/components/bao/BaoLayout"
import Link from 'next/link'
import useSWR from 'swr'
import { useRouter } from "next/router"

export default function Users() {
    const [users, setUsers] = useState<any[]>([])
    const [inputUser, setInputUser] = useState('')
    const { data } = useSWR('/api/users', fetcher)
    const router = useRouter();

    useEffect(() => {
        if (data) {
            setUsers(data)
        }
    }, [data])

    const goSearchUser = useCallback(() => router.push(`/bao/user/${inputUser}`), [inputUser])

    return (
        <BaoLayout>
            <UsersBlock>
                <UserSearch>
                    <TextField
                        label="Search User"
                        value={inputUser}
                        onChange={({ target }) => setInputUser(target.value)}
                    />
                    <Button
                        color="primary"
                        onClick={goSearchUser}
                    >
                        검색!
                </Button>

                </UserSearch>
                <RowBlock>
                    <div style={{ flex: 0.3, }}>수정</div>
                    <div>uid</div>
                    <div>username</div>
                    <div>email</div>
                    <div>lastLogin</div>
                    <div>isLeave</div>
                    <div>createdAt</div>
                    <div>profilePhoto</div>
                </RowBlock>
                {users.map((user, index) => {
                    if (!user.uid) {
                        return null
                    }
                    return (
                        <Link
                            key={user.uid || index}
                            href={`user/${user.uid}`}
                        >
                            <LinkWrapper>
                                <RowBlock>
                                    <div style={{ flex: 0.3, }}>edit</div>
                                    <div>{user.uid}</div>
                                    <div>{user.username}</div>
                                    <div>{user.email}</div>
                                    <div>{user.lastLogin && firebaseTimeStampToStringStamp(user.lastLogin).format('YYYY-MM-DD')}</div>
                                    <div>{user.isLeave ? 'leave' : 'active'}</div>
                                    <div>{user.createdAt && firebaseTimeStampToStringStamp(user.createdAt).format('YYYY-MM-DD')}</div>
                                    <div><img width="50px" src={user.profilePhoto} alt="" /></div>
                                </RowBlock>
                            </LinkWrapper>
                        </Link>
                    )
                })}
            </UsersBlock>
        </BaoLayout>
    )
}

const UsersBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const UserSearch = styled.div`
    display: flex;
    align-items: center;
`;