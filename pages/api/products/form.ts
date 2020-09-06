import { firestore } from '..'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404)
        
    }
    const response = await firestore()
        .collection('products')
        .add(req.body)
    
    if (response) {
        res.status(200)
    }
}