import React, { useEffect, useState, useCallback } from "react"
import styled from "@emotion/styled"
import { firebaseTimeStampToStringStamp, fetcher, ROOT_URL } from "../../../src/utils"
import { TextField, Button } from "@material-ui/core"
import ProductFormModal from "../../../src/components/bao/ProductFormModal"
import Link from "next/link"
import BaoLayout from "../../../src/components/bao/BaoLayout"
import useSWR from 'swr'
import { RowBlock, LinkWrapper } from "../../../src/styles/bao"

export default function Products() {
    const [products, setProducts] = useState<any>([])
    const [visibleModal, setVisibleModal] = useState(false)
    const [inputProduct, setInputProduct] = useState('')
    const [form, setForm] = useState(initialForm)
    const { data } = useSWR('/api/products', fetcher)

    useEffect(() => {
        if (data) {
            setProducts(data)
        }
    }, [data])

    useEffect(() => {
        // use service account creds
        return () => setVisibleModal(false)
    }, [])

    const setFormField = (field: {}) => {
        setForm({
            ...form,
            ...field,
        })
    }

    const goSearchProduct = useCallback(() => {

    }, [inputProduct])

    return (
        <BaoLayout>
            <ProductsBlock>
                <ProductSearch>
                    <TextField
                        label="Search Product"
                        value={inputProduct}
                        onChange={({ target }) => setInputProduct(target.value)}
                    />
                    <Button
                        color="primary"
                        onClick={goSearchProduct}
                    >
                        검색!
                </Button>

                </ProductSearch>
                <Button
                    color="primary"
                    onClick={() => setVisibleModal(true)}
                >
                    등록
            </Button>
                <RowBlock>
                    <div>title</div>
                    <div>price</div>
                    <div>category</div>
                    <div>image</div>
                    <div>createdAt</div>
                </RowBlock>
                {products.map((product: any) => {
                    return (
                        <Link
                            href={`products/${product.id}`}
                            key={product.id}
                        >
                            <LinkWrapper>
                                <RowBlock>
                                    <div>{product.title}</div>
                                    <div>{product.price}</div>
                                    <div>{product.category}</div>
                                    <div>{product.image}</div>
                                    <div>{product.createdAt && firebaseTimeStampToStringStamp(product.createdAt).format('YYYY-MM-DD')}</div>
                                </RowBlock>
                            </LinkWrapper>
                        </Link>
                    )
                })}
                <ProductFormModal
                    form={form}
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                    setFormField={setFormField}
                />
            </ProductsBlock>
        </BaoLayout>
    )
}

const ProductsBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const ProductSearch = styled.div`
    display: flex;
    align-items: center;
`

export type petType = 'dog' | 'cat' | 'all'
export interface Form {
    id: string
    uid: string
    title: string
    status: 'active' | 'deactive'
    description: string
    petType: petType
    ratings: number
    mallName: string
    originalCategoery: string
    tags: string[]
    category: string
    url: string
    image: string
    price: number
    discountPrice: number
    hits: number
    reviewCount: number
    orderCount: number
    profits: number
    createdAt: any
    updatedAt: any
    expiredAt: any
}

const initialForm: Form = {
    id: '',
    uid: '',
    status: 'active',
    title: '',
    description: '',
    petType: 'all',
    ratings: 4,
    mallName: '',
    originalCategoery: '',
    tags: [],
    category: '',
    url: '',
    image: '',
    price: 0,
    discountPrice: 0,
    hits: 0,
    reviewCount: 0,
    orderCount: 0,
    profits: 0,
    createdAt: '',
    updatedAt: '',
    expiredAt: '',
}