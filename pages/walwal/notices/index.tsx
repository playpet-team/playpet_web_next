import React, { useState } from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Modal } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import WalwalLayout from '../../../src/components/walwal/WalwalLayout';
import { RowBlock } from '../../../src/styles/walwal';
import { fetcher } from '../../../src/utils';

const noticeKeys = ['title', 'description', 'link', 'type'];

// export const getServerSideProps: GetServerSideProps = async () => {
//     const notices = await admin.firestore()
//         .collection(Collections.Notices)
//         .where('type', '==', 'notice')
//         .get()
//     let noticeData = []
//     if (!notices.empty) {
//         noticeData = notices.docs.map(board => board.data())
//     }
//     return {
//         props: {
//             noticeData,
//         },
//     }
// }
export default function Notices() {
    const { data } = useSWR('/api/notices', fetcher);
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <WalwalLayout>
            <Button color="primary" onClick={() => setVisibleModal(true)}>
                등록
            </Button>
            <NoticesBlock>
                <RowBlock>
                    {noticeKeys.map((key, index) => (
                        <div key={index}>{key}</div>
                    ))}
                </RowBlock>
            </NoticesBlock>
            <NoticesBlock>
                {data &&
                    data.map((notice, noticeIndex) => (
                        <RowBlock key={noticeIndex}>
                            {noticeKeys.map((key, index) => (
                                <div key={`${notice[key]}-${index}`}>
                                    {notice[key]}
                                </div>
                            ))}
                        </RowBlock>
                    ))}
            </NoticesBlock>
            <AddNoticeModal
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                noticeType="notice"
            />
        </WalwalLayout>
    );
}

const NoticesBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

function AddNoticeModal({
    visibleModal,
    setVisibleModal,
    noticeType = 'notice',
}: {
    visibleModal: boolean;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    noticeType: 'notice' | 'qna';
}) {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        Axios({
            method: 'POST',
            data,
            url: '/api/notices/add-notice',
        });
        setVisibleModal(false);
        router.reload();
    };

    return (
        <Modal
            open={visibleModal}
            disableBackdropClick={false}
            onClose={() => setVisibleModal(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <AddNoticeModalBlock>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputBlock>
                        {noticeKeys.map((key, index) => {
                            if (key === 'type') {
                                return (
                                    <select
                                        ref={register}
                                        key={index}
                                        name={key}
                                    >
                                        <option value="notice">공지사항</option>
                                        <option value="qna">QnA</option>
                                    </select>
                                );
                            }
                            return (
                                <Input
                                    key={index}
                                    name={key}
                                    defaultValue={
                                        key === 'type' ? noticeType : ''
                                    }
                                    placeholder={key}
                                    disabled={key === 'type'}
                                    ref={register}
                                />
                            );
                        })}
                    </InputBlock>
                    <Button color="primary" type="submit">
                        등록!!!!!!!!!!!!
                    </Button>
                </form>
            </AddNoticeModalBlock>
        </Modal>
    );
}

const AddNoticeModalBlock = styled.div`
    position: absolute;
    overflow: scroll;
    padding: 24px;
    flex-direction: column;
    background-color: #fff;
    width: 800px;
    height: 800px;
    display: flex;
    flex: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
`;

const Input = styled.input`
    margin-bottom: 8px;
`;
