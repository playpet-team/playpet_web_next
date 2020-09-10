import { isProduction } from './../../../src/utils/index';
import { Sentry, storage } from './../'
const axios = require('axios')
const Transloadit = require('transloadit')
const DEV_TEMPLATE = 'e6dc7dd95f04406b8cba7d061231a20d'
const PROD_TEMPLATE = 'b871ce4999ec4fb895b26bba7e32d377'

export default async function personHandler({ body: {
    cardId,
}}: { body: { cardId: string; firename: string; }}, res) {
    console.log("1")
    if (!cardId) {
        res.status(404)
    }
    try {
        console.log("2")
        const response = await axios({
            method: 'GET',
            url: `https://storage.googleapis.com/playpet-5b432.appspot.com/playground/${cardId}`,
            responseType: 'stream'
        })
        console.log("2")
        const transloadit = new Transloadit({
            authKey: process.env.TRANSLOADIT_KEY,
            authSecret: process.env.TRANSLOADIT_SECRET
        })
        const options = { params: { template_id: isProduction ? PROD_TEMPLATE : DEV_TEMPLATE }}
        console.log("3")
        transloadit.addStream(cardId, response.data)
        console.log("4")
        transloadit.createAssembly(options, (e, result) => {
            console.log("5")
            if (e) {
                Sentry.captureException(e)
                res.status(404)
            }
            console.log("6")
            res.status(200).json({
                result
            })
        })
        
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}