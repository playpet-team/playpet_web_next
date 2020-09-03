import React, { useEffect, useState, useCallback } from "react";
import styled from "@emotion/styled";
import { firebaseTimeStampToStringStamp } from "../../../src/utils";
import { TextField, Button } from "@material-ui/core";
import Link from "next/link";
import BaoLayout from "../../../src/components/bao/BaoLayout";
import { RowBlock, LinkWrapper } from "../../../src/styles/bao";

export default function Stores() {
    const [stores, setStores] = useState<any[]>([]);
    const [inputStore, setInputStore] = useState('');

    useEffect(() => {
        async function loadStores() {
            // Meteor.call('getStores', (error: any, result: any) => {
            //     setStores(result);
            // });
        };
        loadStores();
    }, []);

    const goSearchStore = useCallback(() => {
    }, [inputStore]);

    return (
        <BaoLayout>
            <StoresBlock>
                <StoreSearch>
                    <TextField
                        label="Search Store"
                        value={inputStore}
                        onChange={({ target }) => setInputStore(target.value)}
                    />
                    <Button
                        color="primary"
                        onClick={goSearchStore}
                    >
                        검색!
                </Button>

                </StoreSearch>
                <RowBlock>
                    <div style={{ flex: 0.3, }}>수정</div>
                    <div>id</div>
                    <div>company name</div>
                    <div>king name</div>
                    <div>contact number</div>
                    <div>status</div>
                    <div>petType</div>
                    <div>logo</div>
                    <div>createdAt</div>
                    <div>updatedAt</div>
                </RowBlock>
                {stores.map((store, index) => {
                    if (!store.id) {
                        return null;
                    }
                    return (
                        <Link
                            key={store.id || index}
                            href={`store/${store.id}`}
                        >
                            <LinkWrapper>
                                <RowBlock>
                                    <div style={{ flex: 0.3, }}>edit</div>
                                    <div>{store.id}</div>
                                    <div>{store.storename}</div>
                                    <div>{store.email}</div>
                                    <div>{store.lastLogin && firebaseTimeStampToStringStamp(store.lastLogin).format('YYYY-MM-DD')}</div>
                                    <div>{store.isLeave ? 'leave' : 'active'}</div>
                                    <div>{store.createdAt && firebaseTimeStampToStringStamp(store.createdAt).format('YYYY-MM-DD')}</div>
                                    <div><img width="50px" src={store.profilePhoto} alt="" /></div>
                                </RowBlock>
                            </LinkWrapper>
                        </Link>
                    )
                })}
            </StoresBlock>
        </BaoLayout>
    )
};

const StoresBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const StoreSearch = styled.div`
    display: flex;
    align-items: center;
`;
