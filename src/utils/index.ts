import moment from 'moment'
export const firebaseTimeStampToStringStamp = (at: any) => moment((at.seconds || at._seconds) * 1000)
export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const isServer = () => typeof window === 'undefined'
export const server = isServer() ? 'http://localhost:3000' : 'https://playpet.me';
export const removeSpace = (val: string = '') => val.replace(/(\s*)/g, '')