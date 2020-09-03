import React, { useEffect, useState, useCallback } from "react"
import styled from "@emotion/styled"
import { Modal, TextField, Button, useMediaQuery } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import { Form } from '../../../pages/bao/products'

const MAPPING_FIELDS: any = {
    id: { label: '', disabled: true, required: false, },
    uid: { label: '', disabled: true, required: false, },
    status: { type: 'select', default: ['acitve', 'deactive'], label: 'active | deactive', disabled: false, required: false, },
    title: { label: '제목', disabled: false, required: true, },
    description: { label: '설명 (최대 30자 정도)', disabled: false, required: true, },
    petType: { label: 'all | dog | cat', disabled: false, required: true, },
    ratings: { type: 'select', default: [1, 2, 3, 4, 5], label: '1~5', disabled: false, required: false, },
    mallName: { label: '쇼핑몰 이름', disabled: false, required: true, },
    originalCategoery: { label: '쇼핑몰에서의 카테고리', disabled: false, required: true, },
    tags: { label: '검색 태그 (콤마로 띄어쓰기 없이)', disabled: false, required: true, },
    category: { label: '카테고리', disabled: false, required: true, },
    url: { label: '모바일 url', disabled: false, required: true, },
    image: { label: '썸네일 이미지 http/s 포함', disabled: false, required: true, },
    price: { label: '원래 가격 콤마 없이 숫자만', disabled: false, required: true, },
    discountPrice: { label: '할인가격 콤마 없이 숫자만', disabled: false, required: false, },
    hits: { label: '조회수', disabled: false, required: false, },
    reviewCount: { label: '리뷰개수 0~', disabled: false, required: false, },
    orderCount: { label: '주문 갯수', disabled: false, required: false, },
    profits: { label: '수수료 (현재는 0)', disabled: false, required: false, },
    createdAt: { label: '입력 날자', disabled: true, required: false, },
    updatedAt: { label: '입력 날자', disabled: true, required: false, },
    expiredAt: { label: '만료날짜', disabled: true, required: false, },
}
interface Modal {
    formType?: 'add' | 'edit'
    form: Form | any
    visibleModal: boolean
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
    setFormField: Function
}
export default function ProductFormModal({
    formType = 'add',
    form,
    visibleModal,
    setVisibleModal,
    setFormField,
}: Modal) {
    const desktop = useMediaQuery('(min-width:1024px)')
    const [errorField, setErrorField] = useState<string[]>([])

    const addForm = useCallback(async () => {
        await fetch('/api/products/form', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }, [])

    const checkValidation = useCallback(() => {
        const requiredFields = Object.keys(MAPPING_FIELDS).filter((field: any) => MAPPING_FIELDS[field].required)
        console.log("requiredFields", requiredFields)
        const errorFields = requiredFields.filter(field => {
            const value = form[field]
            if (field === 'petType') {
                return !['all', 'dog', 'cat'].includes(value)
            }
            return !value
        })
        setErrorField(errorFields)
        return errorFields
    }, [])

    const handleSubmit = useCallback(() => {
        const errors = checkValidation()
        console.log("errors.length", errors.length)
        if (errors.length) {
            return alert('뭔가 덜적었다')
        }
        addForm()
        setVisibleModal(false)
    }, [])

    return (
        <Modal
            open={visibleModal}
            disableBackdropClick={false}
            onClose={() => setVisibleModal(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <ModalContainer desktop={desktop ? 1 : 0}>
                {!desktop && <CloseIcon onClick={() => setVisibleModal(false)} />}
                {formType === 'add' ? '추가' : '수정'}
                {Object.keys(form).map(row => {
                    return (
                        <TextField
                            key={row}
                            label={row}
                            value={form[row]}
                            error={errorField.includes(row)}
                            onChange={({ target }) => setFormField({ [row]: target.value })}
                            helperText={MAPPING_FIELDS[row].label}
                            required={MAPPING_FIELDS[row].required}
                            disabled={MAPPING_FIELDS[row].disabled}
                            size="medium"
                            style={{
                                marginBottom: 24,
                            }}
                        />
                    )
                })}
                <Button
                    color="primary"
                    onClick={handleSubmit}
                >
                    등록!!!!!!!!!!!!
                </Button>
            </ModalContainer>
        </Modal>
    )
}

const ModalContainer = styled.div<{ desktop: number; }>`
    position: absolute;
    overflow: scroll;
    padding: 24px;
    flex-direction: column;
    background-color: #fff;
    width: ${({ desktop }) => desktop ? '800px' : '100%'};
    height: ${({ desktop }) => desktop ? '800px' : '100%'};
    display: flex;
    flex: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
