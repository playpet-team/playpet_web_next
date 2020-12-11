import styled from '@emotion/styled'
import { Button, TextField } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import WalwalLayout from '../../../src/components/walwal/WalwalLayout'
import { colors } from '../../../src/lib/styles'
import { LinkWrapper, RowBlock } from '../../../src/styles/walwal'
import { fetcher, firebaseTimeStampToStringStamp } from '../../../src/utils'


function PetInformation() {
    // const router = useRouter()
    const [petInformation, setPetInformation] = useState<any[]>([])
    const [petType, setPetType] = useState<'DOG' | 'CAT'>('DOG')
    const { data } = useSWR(`/api/pet/information?petType=${petType}`, fetcher)

    useEffect(() => {
        if (data) {
            setPetInformation(data)
        }
    }, [data])

    return (
        <WalwalLayout>
            <Button
                onClick={() => setPetType('DOG')}
                style={{
                    color: petType === 'DOG' ? colors.primary : '#333'
                }}
            >
                강아지
            </Button>
            <Button
                onClick={() => setPetType('CAT')}
                style={{
                    color: petType === 'CAT' ? colors.primary : '#333'
                }}
            >
                고양이
            </Button>
            <UsersBlock>
                <RowBlock>
                    <div>id</div>
                    <div>name</div>
                    <div>size</div>
                    <div>status</div>
                    <div>weight-male</div>
                    <div>weight-female</div>
                    <div>type</div>
                </RowBlock>
                {petInformation.map((pet) => {
                    if (!pet.id) {
                        return null
                    }
                    return (
                        <RowBlock>
                            <div>{pet.id}</div>
                            <div>{pet.name}</div>
                            <div>{pet.size}</div>
                            <div>{pet.status}</div>
                            <div>{pet.weight.male}</div>
                            <div>{pet.weight.female}</div>
                            <div>{pet.type}</div>
                        </RowBlock>
                    )
                })}
            </UsersBlock>
        </WalwalLayout>
    )
}

export default PetInformation

const UsersBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const UserSearch = styled.div`
    display: flex;
    align-items: center;
`;
