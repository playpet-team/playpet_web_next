import { isProduction } from './../../../src/utils/index';
import { NextApiRequest, NextApiResponse } from 'next'
import * as Sentry from '@sentry/node'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { apiSetup } from '..'
apiSetup()

const arrayHeaders = ['pet', 'size', 'packingUnit', 'rawMaterial', 'function']

const BOOLEAN_FALSE = ['FALSE', 'false', 'X']
const BOOLEAN_TRUE = ['TRUE', 'true', 'O']

const isBoolean = (value) => {
    if (BOOLEAN_FALSE.includes(value)) {
        return false
    }
    if (BOOLEAN_TRUE.includes(value)) {
        return true
    }
    return null
}
const checkValueType = (value) => {
    if (typeof isBoolean(value) === 'boolean') {
        return isBoolean(value)
    }
    return value
}

const splitStringToArray = (value: string) => value.split(',').map(v => v.trim())

export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            res.status(404)
        }
        const doc = new GoogleSpreadsheet('1E-rN6CG6xuGVYsU1ynPWTeAEkJELg7gw47ybzs0DK0I')
        await doc.useServiceAccountAuth({
            client_email: process.env.SPREAD_CLIENT_EMAIL,
            private_key: process.env.SPREAD_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[isProduction ? 1 : 0]
        const rows = await sheet.getRows()

        const feeds = rows.map(row => {
            // sheet의 header 를 돌면서 value 를 object 에 추가해준 뒤, array map 으로 넘긴다
            const headers = row._sheet.headerValues
            
            const feed: { [key: string]: any } = {}
            headers.forEach(header => {
                const isArrayHeader = arrayHeaders.includes(header)
                const value = checkValueType(row[header])

                feed[header] = isArrayHeader ? splitStringToArray(value) : value
            })
            return feed
        })
        console.log('--------', feeds)
        
        return res.status(200).json({
            status: 'SUCCESS',
            feeds,
        })
    } catch (e) {
        console.log('$e', e)
        Sentry.captureException(e)
        return res.status(404).json({
            status: 'FAIL',
            message: '',
            feeds: [],
        })
    }
}
