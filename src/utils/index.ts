import moment from 'moment'
export const firebaseTimeStampToStringStamp = (at: any) => moment((at.seconds || at._seconds) * 1000)
export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const isProduction = process.env.NODE_ENV === 'production';
export const isServer = () => typeof window === 'undefined'
export const ROOT_URL = isProduction ? 'https://playpet.me' : 'http://localhost:3000';
export const removeSpace = (val: string = '') => val.replace(/(\s*)/g, '')