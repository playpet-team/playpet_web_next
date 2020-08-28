import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ROOT_URL } from "../../src/utils";

export async function getServerSideProps({ params }) {
    const res = await fetch(params.id && `${ROOT_URL}/api/products/${params.id}`)
    return {
        props: { data: await res.json() }
    }
}


export default function PlaygroundCard(props) {
    console.log('query------', props);
    const { query } = useRouter()

    return (
        <ProductDetailBlock>
            aoentuh
        </ProductDetailBlock>
    )
};

const ProductDetailBlock = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`;
