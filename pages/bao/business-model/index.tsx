import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import BaoLayout from "../../../src/components/bao/BaoLayout";
import { RowBlock } from "../../../src/styles/bao";
import { fetcher, firebaseTimeStampToStringStamp } from "../../../src/utils";

export default function Playground() {
    const [models, setModels] = useState<any[]>([]);
    const { data } = useSWR('/api/business-model', fetcher)
    console.log("data", data)

    useEffect(() => {
        if (data) {
            setModels(data)
        }
    }, [data])

    return (
        <BaoLayout>
            <PlaygroundsBlock>
                <RowBlock>
                    <div>id</div>
                    <div>createdAt</div>
                    <div>discount</div>
                    <div>discountType</div>
                    <div>merchant_uid</div>
                    <div>name</div>
                    <div>originalPrice</div>
                    <div>price</div>
                    <div>updatedAt</div>
                    <div>updatedBy</div>
                    
                </RowBlock>
                {models.map(model => {
                    if (!model.id) {
                        return null;
                    }
                    return (
                        <RowBlock>
                            <div>{model.id}</div>
                            <div>{model.createdAt && firebaseTimeStampToStringStamp(model.createdAt).format('YYYY-MM-DD')}</div>
                            <div>{model.updatedAt && firebaseTimeStampToStringStamp(model.updatedAt).format('YYYY-MM-DD')}</div>
                            <div>{model.discount}</div>
                            <div>{model.discountType}</div>
                            <div>{model.merchant_uid}</div>
                            <div>{model.name}</div>
                            <div>{model.originalPrice}</div>
                            <div>{model.price}</div>
                            <div>{model.updatedBy}</div>
                        </RowBlock>
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
