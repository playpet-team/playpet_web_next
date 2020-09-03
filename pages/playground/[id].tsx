import React, { useState, useRef, useMemo, useCallback, useEffect } from "react"
import styled from "@emotion/styled"
import ReactPlayer from 'react-player'
import { css } from "@emotion/core"
import Layout from "../../src/components/Layout"
import SEO from "../../src/components/PlaypetHead"
import useSWR from "swr"
import { fetcher } from "../../src/utils"
import { useRouter } from "next/router"

export default function PlaygroundCard() {
    const [cards, setCard] = useState<any>({});
    const { query } = useRouter()
    const { data } = useSWR(() => query.id && `/api/playground/${query.id}`, fetcher)
    const [openContent, setOpenContent] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const videoEl = useRef(null)

    useEffect(() => {
        if (data) {
            setCard(data)
        }
    }, [data])

    // const toggleMute = useCallback((e) => {
    //     e.stopPropagation()
    //     setIsMute(!isMute)
    // }, [isMute, videoEl])

    // const toggleContent = useCallback(() => {
    //     const toggleContent = !openContent
    //     setOpenContent(toggleContent)
    //     setIsPlaying(!toggleContent)
    // }, [openContent, isPlaying])

    const { contents = [], title = '', updatedAt = '' } = cards

    if (!contents.length) {
        return null
    }

    return (
        <Layout>
            <SEO
                title={title}
            />
            <PlaygroundCardBlock>
                <CardWrapper>
                    <Card>
                        <VideoWrapper>
                            <meta itemProp="thumbnailUrl" content={contents[0].videoThumbnail} />
                            <meta itemProp="contentURL" content={contents[0].url} />
                            <meta itemProp="uploadDate" content={updatedAt} />
                            <meta itemProp="width" content={contents[0].width} />
                            <meta itemProp="height" content={contents[0].height} />
                            <ReactPlayer
                                ref={videoEl}
                                width='100%'
                                height='100%'
                                playing={isPlaying}
                                // muted={isMute}
                                loop
                                url={contents[0].url}
                            />
                            <VideoContent
                                openContent={openContent}
                            >
                                <ContentWrapper>
                                    <ControlBar>
                                        <ReactionIconWrapper>
                                            <Icon
                                                src={'/icon/thumbUp_white.svg'}
                                            />
                                            {/* <Icon
                                            src={'/icon/thumbDown_white.svg'}
                                        /> */}
                                        </ReactionIconWrapper>
                                        {/* <ControlIconWrapper>
                                        <Icon
                                            src={`/icon/volume${isMute ? 'Up' : 'Off'}_white.svg`}
                                            onClick={toggleMute}
                                        />
                                    </ControlIconWrapper> */}
                                    </ControlBar>
                                    <Title>
                                        {title}
                                    </Title>
                                    <ContentBackground openContent={openContent}></ContentBackground>
                                </ContentWrapper>
                            </VideoContent>
                        </VideoWrapper>
                    </Card>
                </CardWrapper>
            </PlaygroundCardBlock>
        </Layout>
    )
}

const PlaygroundCardBlock = styled.div`
    flex-direction: column;
    display: flex;
    height: 100vh;
    flex: 1;
    align-items: center;
    background-color: #303441;
`

const CardWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #fff;
`

const Card = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const VideoWrapper = styled.div`
    
`

const ControlBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
`

const ReactionIconWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ControlIconWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    cursor: pointer;
`

const Title = styled.h1`
    font-size: 17px;
    margin-top: 8px;
    color: white;
    position: relative;
    z-index: 10;
`

// const Video = styled(ReactPlayer)`
// `

const ContentWrapper = styled.div`
    position: relative;
    padding: 16px;
    height: 100%;
`

const VideoContent = styled.div<{ openContent: Boolean }>`
    width: 100%;
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    height: 100px;
    transition: all 300ms ease-out;
    z-index: 10;
    ${props => props.openContent && css`
        height: 50vh;
    `}
`

const ContentBackground = styled.div<{ openContent: Boolean }>`
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: rgba(154, 155, 167, 0.5);
    position: absolute;
    left: 0px;
    top: 0px;
    ${props => props.openContent && css`
        background-color: rgba(154, 155, 167, 1);
    `}
`
