import styled from "@emotion/styled";
import { Button, TextField } from "@material-ui/core";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import BaoLayout from "../../../src/components/bao/BaoLayout";
import { LinkWrapper, RowBlock } from "../../../src/styles/bao";
import { fetcher, firebaseTimeStampToStringStamp } from "../../../src/utils";

export default function Playground() {
    const [cards, setCards] = useState<any[]>([]);
    const [inputId, setInputId] = useState('');
    const { data } = useSWR('/api/playground', fetcher)

    useEffect(() => {
        if (data) {
            setCards(data)
        }
    }, [data])

    const goSearchCard = useCallback(() => {
    }, [inputId]);

    return (
        <BaoLayout>
            <PlaygroundsBlock>
                <PlaygroundsSearch>
                    <TextField
                        label="Search Store"
                        value={inputId}
                        onChange={({ target }) => setInputId(target.value)}
                    />
                    <Button
                        color="primary"
                        onClick={goSearchCard}
                    >
                        검색!
                </Button>

                </PlaygroundsSearch>
                <RowBlock>
                    <div>id</div>
                    {/* <div>company name</div> */}
                    {/* <div>king name</div> */}
                    {/* <div>contact number</div> */}
                    {/* <div>status</div> */}
                    {/* <div>petType</div> */}
                    {/* <div>logo</div> */}
                    <div>createdAt</div>
                    {/* <div>updatedAt</div> */}
                </RowBlock>
                {cards.map((card, index) => {
                    if (!card.id) {
                        return null;
                    }
                    return (
                        <Link
                            key={card.id || index}
                            href={`playground/${card.id}`}
                        >
                            <LinkWrapper>
                                <RowBlock>
                                    <div>{card.id}</div>
                                    {/* <div>{card.storename}</div> */}
                                    {/* <div>{card.email}</div> */}
                                    {/* <div>{card.lastLogin && firebaseTimeStampToStringStamp(card.lastLogin).format('YYYY-MM-DD')}</div> */}
                                    {/* <div>{card.isLeave ? 'leave' : 'active'}</div> */}
                                    <div>{card.createdAt && firebaseTimeStampToStringStamp(card.createdAt).format('YYYY-MM-DD')}</div>
                                    {/* <div><img width="50px" src={card.profilePhoto} alt="" /></div> */}
                                </RowBlock>
                            </LinkWrapper>
                        </Link>
                    )
                })}
            </PlaygroundsBlock>
        </BaoLayout>
    )
};

const PlaygroundsBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const PlaygroundsSearch = styled.div`
    display: flex;
    align-items: center;
`;
