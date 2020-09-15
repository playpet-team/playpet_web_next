import * as Sentry from '@sentry/node'
import axios from 'axios'
import { NextApiResponse } from 'next'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler({ body: {
    access_token = '',
    customer_uid = 'testuid', // 카드(빌링키)와 1:1로 대응하는 값
}}: {
    body: {
        access_token: string
        customer_uid: string
    }
}, res: NextApiResponse
) {
    try {
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
        return res.status(200).json({ data, })
    } catch (e) {
        Sentry.captureException(e)
        return res.status(404)
    }
}

const PAYMENT_URL = 'https://api.iamport.kr/subscribe/payments/again'
