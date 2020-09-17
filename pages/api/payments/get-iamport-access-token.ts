import * as Sentry from '@sentry/node'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(404)
    }
    try {
        const getToken = await axios({
            url: IAMPORT_GET_TOKEN_URL,
            method: 'post', // POST method
            headers: { 'Content-Type': 'application/json' },
            data: {
                imp_key: process.env.IMP_KEY,
                imp_secret: process.env.IMP_SECRET,
            },
        })
        console.log(10)
        const { access_token } = getToken.data.response 
        // 47019c2fb0b7d1f89f1178156493c4a83b542afd

        res.status(200).json({ access_token, })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}

const IAMPORT_GET_TOKEN_URL = 'https://api.iamport.kr/users/getToken'
