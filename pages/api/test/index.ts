import * as Sentry from '@sentry/node'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiSetup } from '..'
apiSetup()

export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(404)
    }
    try {
        
        res.status(200).json({ status: 'success', })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}
