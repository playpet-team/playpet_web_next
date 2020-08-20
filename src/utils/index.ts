import moment from 'moment'
export const firebaseTimeStampToStringStamp = (at: any) => moment((at.seconds || at._seconds) * 1000)
export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const isServer = () => typeof window === 'undefined'