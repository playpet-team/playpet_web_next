import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { fetcher } from "../../../src/utils";
import useSWR from 'swr'
import { useRouter } from "next/router";
import BaoLayout from "../../../src/components/bao/BaoLayout";
// import Link from "next/link";
import { Row, KeyText, ValueText } from "../../../src/styles/bao";

export default function CardDetail(props) {
    const { query } = useRouter()
    const [card, setCard] = useState<any>(null);
    const { data } = useSWR(
        () => query.id && `/api/playground/${query.id}`,
        fetcher,
        { initialData: props.data }
    )

    useEffect(() => {
        if (data) {
            setCard(data)
        }
    }, [data])

    if (card === null) {
        return <div>로드중...</div>
    }

    // const setFormField = (field: {}) => {
    //     setCard({
    //         ...card,
    //         ...field,
    //     });
    // };

    return (
        <BaoLayout>
            <CardDetailBlock>
                <CardInformationBlock>
                    <Row>
                        <KeyText>status</KeyText>
                        <ValueText>{card.status}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>createdAt</KeyText>
                        <ValueText>{card.createdAt}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>uid</KeyText>
                        <ValueText>{card.uid}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>id</KeyText>
                        <ValueText>{card.id}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>media</KeyText>
                        <ValueText>{(card.contents || []).map(content => (
                            <video controls={true} key={card.id} width="300" height="300"><source src={content.url} /></video>
                        ))}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>title</KeyText>
                        <ValueText>{card.title}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>description</KeyText>
                        <ValueText>{card.description}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>likes</KeyText>
                        <ValueText>{card.likes}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>tags</KeyText>
                        <ValueText>{card.tags.join(', ')}</ValueText>
                    </Row>
                </CardInformationBlock>
            </CardDetailBlock>
        </BaoLayout>
    )
};

const CardDetailBlock = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`;

const CardInformationBlock = styled.div``;
