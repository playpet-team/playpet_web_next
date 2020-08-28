import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { firebaseTimeStampToStringStamp, fetcher, ROOT_URL } from "../../../src/utils";
import useSWR from 'swr'
import { Form } from ".";
import { useRouter } from "next/router";
import BaoLayout from "../../../src/components/bao/BaoLayout";
import Link from "next/link";

export async function getServerSideProps({ params }) {
    const res = await fetch(params.id && `${ROOT_URL}/api/products/${params.id}`)
    return {
        props: { data: await res.json() }
    }
}

export default function ProductDetail(props) {
    const { query } = useRouter()
    const [productDetail, setProductDetail] = useState<Form | null>(null);
    const { data } = useSWR(
        () => query.id && `/api/products/${query.id}`,
        fetcher,
        { initialData: props.data }
    )

    useEffect(() => {
        if (data) {
            setProductDetail(data)
        }
    }, [data])

    if (productDetail === null) {
        return <div>로드중...</div>
    }

    const setFormField = (field: {}) => {
        setProductDetail({
            ...productDetail,
            ...field,
        });
    };

    return (
        <BaoLayout>
            <ProductDetailBlock>
                <ProductInformationBlock>
                    <Row>
                        <KeyText>이미지</KeyText>
                        <ValueText>
                            <img src={productDetail.image} width="200" height="200" />
                        </ValueText>
                    </Row>
                    <Row>
                        <KeyText>id</KeyText>
                        <ValueText>{productDetail.id}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>status</KeyText>
                        <ValueText>{productDetail.status}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>uid</KeyText>
                        <ValueText>{productDetail.uid}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>제목</KeyText>
                        <ValueText>{productDetail.title}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>설명</KeyText>
                        <ValueText>{productDetail.description}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>별점</KeyText>
                        <ValueText>{productDetail.ratings}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>쇼핑몰 이름</KeyText>
                        <ValueText>{productDetail.mallName}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>이전 카테고리</KeyText>
                        <ValueText>{productDetail.originalCategoery}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>플레이펫 카테고리</KeyText>
                        <ValueText>{productDetail.category}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>태그</KeyText>
                        <ValueText>{productDetail.tags}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>주소</KeyText>
                        <ValueText>
                            <Link href="productDetail.url"><a>링크</a></Link>
                        </ValueText>
                    </Row>
                    <Row>
                        <KeyText>가격</KeyText>
                        <ValueText>{productDetail.price}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>할인율</KeyText>
                        <ValueText>{productDetail.discountPrice}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>조회수</KeyText>
                        <ValueText>{productDetail.hits}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>리뷰 갯수</KeyText>
                        <ValueText>{productDetail.reviewCount}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>주문수</KeyText>
                        <ValueText>{productDetail.orderCount}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>수수료</KeyText>
                        <ValueText>{productDetail.profits}</ValueText>
                    </Row>
                    <Row>
                        <KeyText>등록일</KeyText>
                        <ValueText>{productDetail.createdAt && firebaseTimeStampToStringStamp(productDetail.createdAt).format('YYYY-MM-DD')}</ValueText>
                    </Row>
                </ProductInformationBlock>
            </ProductDetailBlock>
        </BaoLayout>
    )
};

const ProductDetailBlock = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1;
`;

const ProductInformationBlock = styled.div``;

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