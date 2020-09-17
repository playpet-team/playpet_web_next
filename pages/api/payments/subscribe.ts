import * as Sentry from '@sentry/node'
import axios from 'axios'
import { NextApiResponse } from 'next'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler({
    body: {
        access_token = '47019c2fb0b7d1f89f1178156493c4a83b542afd',
        customer_uid = 'testuid', // 카드(빌링키)와 1:1로 대응하는 값
    },
    method
}: {
    body: {
        access_token: string
        customer_uid: string
    }
    method: string
}, res: NextApiResponse
) {
    if (method === 'GET') {
        res.status(404)
    }
    try {
        console.log('0000000000')
        const { data } = await axios({
            url: PAYMENT_URL,
            method: 'post',
            headers: { 'Authorization': access_token }, // 인증 토큰 Authorization header에 추가
            data: {
                customer_uid,
                merchant_uid: 'order_monthly_0001', // 새로 생성한 결제(재결제)용 주문 번호
                amount: 1000,
                name: '월간 이용권 정기결제',
            },
        })

        console.log('paymentResult--------', data)
        res.status(200).json({ data, })
    } catch (e) {
        console.error('paymentResult--------', e)
        Sentry.captureException(e)
        res.status(404)
    }
}

const PAYMENT_URL = 'https://api.iamport.kr/subscribe/payments/again'
