import styled from '@emotion/styled';
import { Button, TextField } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import WalwalLayout from '../../../src/components/walwal/WalwalLayout';
import { LinkWrapper, RowBlock } from '../../../src/styles/walwal';
import { fetcher, firebaseTimeStampToStringStamp } from '../../../src/utils';

export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [inputUser, setInputUser] = useState('');
    const { data } = useSWR('/api/users', fetcher);
    const router = useRouter();

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data]);

    const goSearchUser = useCallback(
        () => router.push(`/walwal/users/${inputUser}`),
        [inputUser],
    );

    return (
        <WalwalLayout>
            <UsersBlock>
                <UserSearch>
                    <TextField
                        label="Search User"
                        value={inputUser}
                        onChange={({ target }) => setInputUser(target.value)}
                    />
                    <Button color="primary" onClick={goSearchUser}>
                        검색!
                    </Button>
                </UserSearch>
                <RowBlock>
                    <div style={{ flex: 0.3 }}>수정</div>
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
                        return null;
                    }
                    return (
                        <Link
                            key={user.uid || index}
                            href={`users/${user.uid}`}
                        >
                            <LinkWrapper>
                                <RowBlock>
                                    <div style={{ flex: 0.3 }}>edit</div>
                                    <div>{user.uid}</div>
                                    <div>{user.username}</div>
                                    <div>{user.email}</div>
                                    <div>
                                        {user.lastLogin &&
                                            firebaseTimeStampToStringStamp(
                                                user.lastLogin,
                                            ).format('YYYY-MM-DD')}
                                    </div>
                                    <div>
                                        {user.isLeave ? 'leave' : 'active'}
                                    </div>
                                    <div>
                                        {user.createdAt &&
                                            firebaseTimeStampToStringStamp(
                                                user.createdAt,
                                            ).format('YYYY-MM-DD')}
                                    </div>
                                    <div>
                                        <img
                                            width="50px"
                                            src={user.profilePhoto}
                                            alt=""
                                        />
                                    </div>
                                </RowBlock>
                            </LinkWrapper>
                        </Link>
                    );
                })}
            </UsersBlock>
        </WalwalLayout>
    );
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
