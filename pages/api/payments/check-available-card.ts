import * as Sentry from '@sentry/node'
import axios from 'axios'
import { NextApiResponse } from 'next'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler({
    body: {
        card_number = 5365100185654338,
        expiry = 202207,
        birth = 870919,
        pwd_2digit = 14,
        customer_uid = 'testuid',
        access_token = '47019c2fb0b7d1f89f1178156493c4a83b542afd',
    },
    method,
}: {
    body: {
        card_number: number
        expiry: number
        birth: number
        pwd_2digit: number
        customer_uid: string
        access_token: string
    }
    method: string
}, res: NextApiResponse
) {
    if (method === 'GET') {
        res.status(404)
    }
    try {
        const { data } = await axios({
            url: isAvailableCard(customer_uid),
            method: 'post',
            headers: { 'Authorization': access_token },
            data: {
                card_number,
                expiry,
                birth,
                pwd_2digit,
            }
        })
        console.log("data---", data)
        res.status(200).json({ data, })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}

const isAvailableCard = (customerUid: string) => `https://api.iamport.kr/subscribe/customers/${customerUid}`
