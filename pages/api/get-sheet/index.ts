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
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwd3g7r3tsh0ei\nD3mYRaKc0QXyQSF5GAkzmtwsl/w1c/dn6wD/HWoDOu2ZaTx3CF6s2zaCvlRKySQ/\nfAM57pdSkxWqN5PNJ8Nr8yvgbINNw2NeB15pFrASkABv2djA6prOaZ67ojJg+UEm\n613c/cyWqv8Roeke8zQ3f49THdSkdIl0olWJ7MZ3rFENoITgLGLiqsms3HBnrNtN\n22y/UzUJ+E+QDfcf6e/CzaOHd6WvEt8te05jk9Ce4qJ1sjL1RxaMwAHUTVziDeBs\neIA47u5iap6DZdk6+5L6yf8cHpUe0aHNQnNIYHeosgqkhZzx+8B1WVKTCx4qVVyV\nKhcfHIrPAgMBAAECggEAKM/oob0rCWWcHpH/qETqn+QDwQxpJm11q1a0dyfLb71b\nSdBjEZ2G6CpXyzQ4hLsN0mJ8j+5e5lDwrjILOPnCS5my2AQ0ja0VmEDMNAJEt9Zp\ng9SmdB2IKTLetv+mDq/zj6uDx5dymVTsSYkD01lrWKlBhp1wofTTbcZ1ql5q0IG0\n1+nVgdcJGZg96Zk0/ayOhPscmtloyJjld8OlCaF/7vxNq9ikZ1DxoHXWED0IwDP3\nGR+V2csE1/yf7kxYUCpavdd2P2Y5VM9x/xKAWUCE/E+l9imXVhts6FaausQ+jZZi\nKGzR4tC8Pm0zA/WznUd4BnR3uhdmZtMloY4VYEqVSQKBgQDgSKn/fHFvguDCNXtR\njyqTQ8dZXi/C6PMdOTGBTVZDK5hYBLWF5WLV32p/Z88Mwj88R+JCLGLdPnkeWQ9m\nghGq6+rE11ZbaXZ67Ad18R3ezY3/eR/Y+uiPjddNbcieUS2kVw/iNtV8kh0CFbRG\nIHJSNI5DVPrZzJ+GmCVqLzzkcwKBgQDJa8TDo8aVyvhTEt6S6kpZjSBiaFjPCckP\nfuYz+5BiS+KIFd77oANgvAao/sFkU3RWp4hpX7IDL3lpLH2qEgv5Zg1/NzodIthg\nCZzhEsjdgX7LF5cZCGjDWW56mMjk9BmU7vXo60KKAfgReRokSMcsygg2+ZKqYI4w\nCIq/pQkFNQKBgBoeXC20gEFMLIBxWfsVgQ/FROHTZhx8pFMy5eD48KLB4OvfIISH\nQgtGCVDs9d+2f0a12FN8d8bsD47JMFHvs78D2kMyEIx0q6eE9Rl3CtN3fKHTqTHL\nhmmxSvFpZ4OIUJhiyya82/+1xEsJ3ASOosGP/UE6FDxo5+r0rObAuYahAoGAb5qo\nHuLrUOpy58znyK3K3o3E6OH6e1Vns49TzG/SU7TKYy8DK5dA5+OnKRJnY8ieCLmx\navmcMAmpEy6UvpxbSChUyC14pNY+4A/Tfh6jb6Cl+bArh7JSIhO2lHV9subSGeTC\nGvnoF4H5yuy4IGy298lF/fgRXRg9EL5a6s9uDRUCgYEA23dVAexs3hnMpPh6UIZn\n4M8CtMX6Cp4va/OkRHx+yLk6rog2Dsj9cFqwsfR3YJ6j6C/eEC+ud6Y7KRCC6aPH\n3PCPAtgo3bp5os3EbgTm1+0EycSH0WqNiYhNIDzbocjfUVwwQ0sYJpReGSvbfNDx\ndxsCRmCueun5otRDEpc4DYA=\n-----END PRIVATE KEY-----\n",
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
