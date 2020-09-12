import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Timestamp } from '@firebase/firestore-types';
import Link from "next/link";
import SectionLayout from "./SectionLayout";

export default function ExplorePlayground({ data }: { data: CardModel[] }) {
    const renderCards = () => {
        return data.map(card => {
            return (
                <Link href={`playground/${card.id}`} key={card.id}>
                    <ThumbnailWrapper>
                    <a>
                        <ThumbnailImage
                            src={card.contents[0].videoThumbnail}
                            alt={card.title}
                        />
                    </a>
                    </ThumbnailWrapper>
                </Link>
            )
        })
    }

    return (
        <SectionLayout>
            <Cards>
                <Text>지금 바로 탐색해 보세요</Text>
                <Overlay />
                {renderCards()}
            </Cards>
        </SectionLayout>
    )
}

const absolute = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const Text = styled.div`
    ${absolute}
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #fff;
    font-weight: 800;
    z-index: 2;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    position: relative;
`

const Overlay = styled.div`
    ${absolute}
    background-color: rgba(0, 0, 0, 0.7);
`

const ThumbnailWrapper = styled.div`
    width: 20%;
    height: 200px;
    overflow: hidden;
`

const ThumbnailImage = styled.img`
    max-width: 100%;
    height: auto;
`

export interface CardModel {
    status: 'active' | 'deactive'
    id: string
    username: string
    title: string
    description: string
    tags: string[]
    uid: string
    likes: number
    contents: {
        cardId: string
        url: string
        videoThumbnail: string
        isVideo: boolean
        vertical: boolean
        width: number
        height: number
    }[]
    createdAt: Timestamp
    updatedAt: Timestamp
}