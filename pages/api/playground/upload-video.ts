// const Vimeo = require('vimeo').Vimeo;


// // import { Collections } from './../../../src/utils/collections';
// import { firestore, Sentry } from './../'

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         return
//     }
//     try {

//         console.log('111')
//         const client = new Vimeo(process.env.VIMEO_CLIENT_ID, process.env.VIMEO_CLIENT_SECRET, process.env.VIMEO_ACCESS_TOKEN);
//         console.log('222')
//         client.upload('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/playground%2F9SqDzFPaG9RtHi9n4mJtwjG1R8x2_1599476100?alt=media&token=db3dead3-63d2-4bc5-9f03-36ab2f0227c1', {
//             'name': 'bk1',
//             'description': 'bkbk11'
//         }, (uri: string) => {
//             console.log('uri-------', uri)
//         }, (bytesUploaded: any, bytesTotal: any) => {
//             const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
//             console.log(bytesUploaded, bytesTotal, percentage + '%')
//         }, (error) => {
//             console.error('error-error', error)
//         })
        
//         res.status(200).json({
            
//         })
//     } catch (e) {
//         Sentry.captureException(e)
//         res.status(404)
//     }
// }
