import { getCurrentTime } from './../../../src/utils/firebaseadmin';
import { Collections } from './../../../src/utils/collections';
import * as Sentry from '@sentry/node'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiSetup } from '..'
import * as admin from 'firebase-admin'
apiSetup()

export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(404)
    }
    try {
        // cats.forEach(async (pet) => {
        //     const collection = admin.firestore().collection(Collections.PetInformation)
        //     await collection.add({
        //         id: collection.doc().id,
        //         ...pet,
        //         status: 'active',
        //         createdAt: getCurrentTime(),
        //         updatedAt: getCurrentTime(),
        //     })
        // })
        res.status(200).json({ status: 'success', })
    } catch (e) {
        Sentry.captureException(e)
        res.status(404)
    }
}

// const cats = [
//     {
//         type: 'CAT',
//         name: '노르웨이숲',
//         size: '',
//         weight: {
//             male: 7,
//             female: 6,
//         },
//     },
//     {
//         type: 'CAT',
//         name: '네바 머스커레이드',
//         size: '',
//         weight: {
//             male: 6.5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '네벨롱',
//         size: '',
//         weight: {
//             male: 6.5,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '데본렉스',
//         size: '',
//         weight: {
//             male: 3.25,
//             female: 3.25,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '도메스틱 숏헤어',
//         size: '',
//         weight: {
//             male: 6,
//             female: 6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '도메스틱 롱헤어',
//         size: '',
//         weight: {
//             male: 7.5,
//             female: 7.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '돈스코이',
//         size: '',
//         weight: {
//             male: 4,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '드래곤 리',
//         size: '',
//         weight: {
//             male: 4.7,
//             female: 4.7,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '라가머핀',
//         size: '',
//         weight: {
//             male: 8,
//             female: 5.7,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '라팜',
//         size: '',
//         weight: {
//             male: 3.5,
//             female: 3.3,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '랙돌',
//         size: '',
//         weight: {
//             male: 7,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '러시안 블루',
//         size: '',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '라이코이',
//         size: '',
//         weight: {
//             male: 5,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '람킨 드월프',
//         size: '',
//         weight: {
//             male: 2.9,
//             female: 2.9,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '맹크스',
//         size: '',
//         weight: {
//             male: 4.6,
//             female: 4.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '메인쿤',
//         size: '',
//         weight: {
//             male: 7,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '민스킨',
//         size: '',
//         weight: {
//             male: 2.4,
//             female: 2.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '먼치킨(고양이)',
//         size: '',
//         weight: {
//             male: 3.4,
//             female: 2.8,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '미뉴에트',
//         size: '',
//         weight: {
//             male: 3.2,
//             female: 3.2,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '메콩 밥테일',
//         size: '',
//         weight: {
//             male: 4,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '발리니즈',
//         size: '',
//         weight: {
//             male: 3.4,
//             female: 3.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '버만',
//         size: '',
//         weight: {
//             male: 5.7,
//             female: 3.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '버미즈',
//         size: '',
//         weight: {
//             male: 4,
//             female: 3.2,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '벵갈',
//         size: '',
//         weight: {
//             male: 3.9,
//             female: 3.9,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '봄베이',
//         size: '',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '브리티시 쇼트헤어',
//         size: '',
//         weight: {
//             male: 5.9,
//             female: 4.3,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '브리티시 롱 헤어',
//         size: '',
//         weight: {
//             male: 8,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '밤비노',
//         size: '',
//         weight: {
//             male: 3,
//             female: 3,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '시베리아',
//         size: '',
//         weight: {
//             male: 6.1,
//             female: 7.9,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '샴',
//         size: '',
//         weight: {
//             male: 5.2,
//             female: 4.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '샤트룩스',
//         size: '',
//         weight: {
//             male: 5.4,
//             female: 3.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '셀커크 렉스',
//         size: '',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '소말리',
//         size: '',
//         weight: {
//             male: 3.6,
//             female: 3.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '스코티시 폴드',
//         size: '',
//         weight: {
//             male: 5,
//             female: 3.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '스핑크스',
//         size: '',
//         weight: {
//             male: 5.5,
//             female: 5.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '싱가퓨라',
//         size: '',
//         weight: {
//             male: 6,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '사바나',
//         size: '',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '아메리칸 밥테일',
//         size: '',
//         weight: {
//             male: 5.2,
//             female: 5.2,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '아메리칸 쇼트헤어',
//         size: '',
//         weight: {
//             male: 5.9,
//             female: 4.1,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '아메리칸 와이어헤어',
//         size: '',
//         weight: {
//             male: 6,
//             female: 6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '아메리칸 컬',
//         size: '',
//         weight: {
//             male: 3.9,
//             female: 3,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '아비시니안',
//         size: '',
//         weight: {
//             male: 4.5,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '오리엔탈쇼트헤어',
//         size: '',
//         weight: {
//             male: 4.5,
//             female: 3.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '오리엔탈롱헤어',
//         size: '',
//         weight: {
//             male: 3.9,
//             female: 2.9,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '오시캣',
//         size: '',
//         weight: {
//             male: 5.4,
//             female: 3.3,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '유러피안버미즈',
//         size: '',
//         weight: {
//             male: 4.7,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '이그저틱',
//         size: '',
//         weight: {
//             male: 5.5,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '이집션마우',
//         size: '',
//         weight: {
//             male: 4,
//             female: 3.1,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '엑조틱 쇼트헤어',
//         size: '',
//         weight: {
//             male: 6.8,
//             female: 6.8,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '자바니즈',
//         size: '',
//         weight: {
//             male: 3.1,
//             female: 3.1,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '재패니즈 밥테일',
//         size: '',
//         weight: {
//             male: 3.5,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '쵸지',
//         size: '',
//         weight: {
//             male: 6.1,
//             female: 4.7,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '차이니즈 리 와우',
//         size: '',
//         weight: {
//             male: 4.4,
//             female: 4.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '치토',
//         size: '',
//         weight: {
//             male: 5.6,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '컬러포인트 쇼트헤어',
//         size: '',
//         weight: {
//             male: 3.4,
//             female: 3.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '코니시 렉스',
//         size: '',
//         weight: {
//             male: 4,
//             female: 2.7,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '코리안 숏헤어',
//         size: '',
//         weight: {
//             male: 6,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '코랫',
//         size: '',
//         weight: {
//             male: 3.6,
//             female: 3.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '터키시 반',
//         size: '',
//         weight: {
//             male: 7,
//             female: 5.5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '터키시 앙고라',
//         size: '',
//         weight: {
//             male: 4.2,
//             female: 3.2,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '통키니즈',
//         size: '',
//         weight: {
//             male: 4,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '토이거',
//         size: '',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '페르시안',
//         size: '',
//         weight: {
//             male: 5.4,
//             female: 5.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '픽시 밥',
//         size: '',
//         weight: {
//             male: 5,
//             female: 4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '하바나브라운',
//         size: '',
//         weight: {
//             male: 3.6,
//             female: 3.6,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '하이랜더',
//         size: '',
//         weight: {
//             male: 8,
//             female: 5.4,
//         }
//     },
//     {
//         type: 'CAT',
//         name: '히말라얀',
//         size: '',
//         weight: {
//             male: 4.2,
//             female: 4.2,
//         }
//     }
// ]

// const dogs = [
//     {
//         type: 'DOG',
//         name: '고든 셰터',
//         size: 'L',
//         weight: {
//             male: 30,
//             female: 27,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '골든 리트리버',
//         size: 'L',
//         weight: {
//             male: 32,
//             female: 29,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '그레이트 데인',
//         size: 'L',
//         weight: {
//             male: 72,
//             female: 52,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '그레이트 스위스 마운틴 도그',
//         size: 'L',
//         weight: {
//             male: 59,
//             female: 59,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '그레이트 피레니즈',
//         size: 'L',
//         weight: {
//             male: 52,
//             female: 39,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '그레이하운드',
//         size: 'L',
//         weight: {
//             male: 34,
//             female: 30,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '글렌 오브 이말 테리어',
//         size: 'M',
//         weight: {
//             male: 16,
//             female: 16,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '기슈견',
//         size: 'M',
//         weight: {
//             male: 18,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '네오폴리탄 마스티프',
//         size: 'L',
//         weight: {
//             male: 65,
//             female: 55,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '노르웨지안 부훈트',
//         size: 'M',
//         weight: {
//             male: 15,
//             female: 14,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '노르웨이 엘크 하운드',
//         size: 'M',
//         weight: {
//             male: 24,
//             female: 24,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '노리치 테리어',
//         size: 'S',
//         weight: {
//             male: 5.2,
//             female: 5.2,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '노바 스코셔 덕 톨링 레트리버',
//         size: 'M',
//         weight: {
//             male: 22,
//             female: 19,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '노퍽 테리어',
//         size: 'M',
//         weight: {
//             male: 5.2,
//             female: 5.2,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '뉴펀들랜드',
//         size: 'L',
//         weight: {
//             male: 65,
//             female: 50,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '닥스훈트',
//         size: 'S',
//         weight: {
//             male: 14,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '달마시안',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 20,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '댄디 딘몬트 테리어',
//         size: 'M',
//         weight: {
//             male: 9.5,
//             female: 9.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '도고 까나리오',
//         size: 'L',
//         weight: {
//             male: 55,
//             female: 44,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '도그 드 보르도',
//         size: 'L',
//         weight: {
//             male: 60,
//             female: 60,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '도베르만 핀셔',
//         size: 'L',
//         weight: {
//             male: 43,
//             female: 34,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '도사견',
//         size: 'L',
//         weight: {
//             male: 49,
//             female: 49,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '동경이',
//         size: 'M',
//         weight: {
//             male: 16,
//             female: 16,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '라사압소',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 6,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '라포니안 허더',
//         size: 'L',
//         weight: {
//             male: 29,
//             female: 28,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '래브라도 리트리버',
//         size: 'L',
//         weight: {
//             male: 33,
//             female: 29,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '레이크랜드 테리어',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '로디지아 리지백',
//         size: 'L',
//         weight: {
//             male: 39,
//             female: 31,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '로첸',
//         size: 'S',
//         weight: {
//             male: 5,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '로트와일러',
//         size: 'L',
//         weight: {
//             male: 65,
//             female: 59,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '마스티프',
//         size: 'L',
//         weight: {
//             male: 120,
//             female: 100,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '맨체스터 테리어',
//         size: 'S',
//         weight: {
//             male: 10,
//             female: 7.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '몰티즈',
//         size: 'S',
//         weight: {
//             male: 3.5,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '미니어처 슈나우저',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '미니어처 핀셔',
//         size: 'S',
//         weight: {
//             male: 4.5,
//             female: 4,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '미니어처 푸들',
//         size: 'S',
//         weight: {
//             male: 4,
//             female: 5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '미디엄 푸들',
//         size: 'M',
//         weight: {
//             male: 13,
//             female: 9,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '바센지',
//         size: 'M',
//         weight: {
//             male: 11,
//             female: 9.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '바셋 하운드',
//         size: 'L',
//         weight: {
//             male: 26,
//             female: 23,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '버니즈 마운틴 도그',
//         size: 'L',
//         weight: {
//             male: 40,
//             female: 45,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '베들링턴 테리어',
//         size: 'M',
//         weight: {
//             male: 9,
//             female: 9,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '벨기에 말리노이즈',
//         size: 'L',
//         weight: {
//             male: 32,
//             female: 28,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '벨기에 시프도그',
//         size: 'L',
//         weight: {
//             male: 27.5,
//             female: 22,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '벨기에 테뷰런',
//         size: 'L',
//         weight: {
//             male: 27.5,
//             female: 22.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '벨지안 그리펀',
//         size: 'S',
//         weight: {
//             male: 4,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '벨지안 셰퍼드 독',
//         size: 'L',
//         weight: {
//             male: 27.5,
//             female: 22.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '보더콜리',
//         size: 'M',
//         weight: {
//             male: 17,
//             female: 15,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '보더 테리어',
//         size: 'S',
//         weight: {
//             male: 6.5,
//             female: 5.7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '보르조이',
//         size: 'L',
//         weight: {
//             male: 41,
//             female: 33,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '보스롱',
//         size: 'L',
//         weight: {
//             male: 39,
//             female: 35,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '보스턴 테리어',
//         size: 'M',
//         weight: {
//             male: 11,
//             female: 8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '복서',
//         size: 'L',
//         weight: {
//             male: 30,
//             female: 27,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '볼로네즈',
//         size: 'S',
//         weight: {
//             male: 3,
//             female: 3,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '부비에 데 플랑드르',
//         size: 'L',
//         weight: {
//             male: 38,
//             female: 31,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '불도그',
//         size: 'L',
//         weight: {
//             male: 24,
//             female: 20,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '불 마스티프',
//         size: 'L',
//         weight: {
//             male: 55,
//             female: 50,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '불 테리어',
//         size: 'L',
//         weight: {
//             male: 28,
//             female: 28,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '브뤼셀 그리펀',
//         size: 'S',
//         weight: {
//             male: 2.3,
//             female: 2.3,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '브리아드',
//         size: 'L',
//         weight: {
//             male: 34,
//             female: 29,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '브리타니',
//         size: 'M',
//         weight: {
//             male: 16,
//             female: 16,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '블랙 러시안 테리어',
//         size: 'L',
//         weight: {
//             male: 47.5,
//             female: 56.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '블랙 앤드 탄 쿤하운드',
//         size: 'L',
//         weight: {
//             male: 30,
//             female: 28,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '블러드 하운드',
//         size: 'L',
//         weight: {
//             male: 45,
//             female: 40,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '비글',
//         size: 'M',
//         weight: {
//             male: 10.5,
//             female: 9.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '비숑 프리제',
//         size: 'S',
//         weight: {
//             male: 4,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '비어디드 콜리',
//         size: 'L',
//         weight: {
//             male: 22.5,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '비즐라',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 21,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '사모예드',
//         size: 'L',
//         weight: {
//             male: 22,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '살루키',
//         size: 'L',
//         weight: {
//             male: 17.5,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '삽살개',
//         size: 'L',
//         weight: {
//             male: 23,
//             female: 20,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '서식스 스패니얼',
//         size: 'M',
//         weight: {
//             male: 18,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '세인트 버나드',
//         size: 'L',
//         weight: {
//             male: 120,
//             female: 100,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '셔틀랜드 시프도그',
//         size: 'M',
//         weight: {
//             male: 10,
//             female: 9.25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '소프트 코티드 휘튼 테리어',
//         size: 'M',
//         weight: {
//             male: 17,
//             female: 15,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스무드 폭스 테리어',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스웨디쉬 발훈트',
//         size: 'M',
//         weight: {
//             male: 13.5,
//             female: 12.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스카이 테리어',
//         size: 'M',
//         weight: {
//             male: 17,
//             female: 13,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스코티시 디어하운드',
//         size: 'L',
//         weight: {
//             male: 45,
//             female: 38,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스코티시 테리어',
//         size: 'M',
//         weight: {
//             male: 9,
//             female: 8.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스키퍼키',
//         size: 'S',
//         weight: {
//             male: 6,
//             female: 5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스태퍼드셔 불 테리어',
//         size: 'M',
//         weight: {
//             male: 15,
//             female: 13,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스탠다드 슈나우저',
//         size: 'M',
//         weight: {
//             male: 17,
//             female: 17,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스탠다드 푸들',
//         size: 'L',
//         weight: {
//             male: 20,
//             female: 19,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스패니쉬 그레이 하운드',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스패니쉬 마스티프',
//         size: 'L',
//         weight: {
//             male: 95,
//             female: 65,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스피노네 이탈리아노',
//         size: 'L',
//         weight: {
//             male: 36,
//             female: 31,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '스피츠',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '시바 이누(시바견)',
//         size: 'M',
//         weight: {
//             male: 8.5,
//             female: 8.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '시베리안 허스키',
//         size: 'L',
//         weight: {
//             male: 19.5,
//             female: 24,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '시추',
//         size: 'S',
//         weight: {
//             male: 5.6,
//             female: 5.6,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '시코쿠견',
//         size: 'L',
//         weight: {
//             male: 22,
//             female: 19,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '실리엄 테리어',
//         size: 'M',
//         weight: {
//             male: 9,
//             female: 8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '실키 테리어',
//         size: 'S',
//         weight: {
//             male: 5,
//             female: 4,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아나톨리아 셰퍼드',
//         size: 'L',
//         weight: {
//             male: 47.5,
//             female: 57.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 불도그',
//         size: 'L',
//         weight: {
//             male: 45,
//             female: 35,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 스태퍼드셔 테리어',
//         size: 'M',
//         weight: {
//             male: 34,
//             female: 34,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 아키다',
//         size: 'L',
//         weight: {
//             male: 50,
//             female: 45,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 에스키모 도그',
//         size: 'M',
//         weight: {
//             male: 12,
//             female: 12,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 워터 스패니얼',
//         size: 'M',
//         weight: {
//             male: 14.5,
//             female: 17,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 코커 스패니얼',
//         size: 'M',
//         weight: {
//             male: 10,
//             female: 9,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아메리칸 폭스하운드',
//         size: 'L',
//         weight: {
//             male: 32,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아이리시 울프 하운드',
//         size: 'L',
//         weight: {
//             male: 62,
//             female: 55,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아이리시 테리어',
//         size: 'M',
//         weight: {
//             male: 12,
//             female: 11,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아키타',
//         size: 'L',
//         weight: {
//             male: 35,
//             female: 26,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아펜핀셔',
//         size: 'S',
//         weight: {
//             male: 4.5,
//             female: 4.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '아프간 하운드',
//         size: 'L',
//         weight: {
//             male: 24,
//             female: 23,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '알래스칸 맬러뮤트',
//         size: 'L',
//         weight: {
//             male: 40,
//             female: 35,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '에스트렐라 마운틴 독',
//         size: 'L',
//         weight: {
//             male: 45,
//             female: 35,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '에어데일 테리어',
//         size: 'L',
//         weight: {
//             male: 26,
//             female: 19,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오스트레일리안 실키 테리어',
//         size: 'S',
//         weight: {
//             male: 4.5,
//             female: 4,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오스트레일리안 켈피',
//         size: 'M',
//         weight: {
//             male: 17.5,
//             female: 15,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오스트레일리안 셰퍼드',
//         size: 'L',
//         weight: {
//             male: 28.5,
//             female: 20.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오스트레일리언 캐틀 도그',
//         size: 'M',
//         weight: {
//             male: 16,
//             female: 15,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오스트레일리언 테리어',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 6,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '오터 하운드',
//         size: 'L',
//         weight: {
//             male: 45.5,
//             female: 35,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '올드 잉글리시 시프도그',
//         size: 'L',
//         weight: {
//             male: 38.5,
//             female: 31.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '와이머라너',
//         size: 'L',
//         weight: {
//             male: 35,
//             female: 30,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '와이어 폭스 테리어',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '와이어헤어드 포인팅 그린펀',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '요크셔 테리어',
//         size: 'S',
//         weight: {
//             male: 3,
//             female: 3,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '웨스트 하이랜드 화이트 테리어',
//         size: 'S',
//         weight: {
//             male: 8.5,
//             female: 6.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '웰시 스프링어 스패니얼',
//         size: 'M',
//         weight: {
//             male: 21.5,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '웰시 코기',
//         size: 'M',
//         weight: {
//             male: 15,
//             female: 15,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '웰시 테리어',
//         size: 'M',
//         weight: {
//             male: 9.5,
//             female: 9.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '이비전 하운드',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '이탤리언 그레이하운드',
//         size: 'S',
//         weight: {
//             male: 4,
//             female: 4,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잉글리시 세터',
//         size: 'L',
//         weight: {
//             male: 30,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잉글리시 스프링어 스패니얼',
//         size: 'L',
//         weight: {
//             male: 20.5,
//             female: 22.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잉글리시 코커 스패니얼',
//         size: 'M',
//         weight: {
//             male: 13.5,
//             female: 14.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잉글리시 토이 스패니얼',
//         size: 'S',
//         weight: {
//             male: 5,
//             female: 5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잉글리시 폭스하운드',
//         size: 'L',
//         weight: {
//             male: 30,
//             female: 28.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '자이언트 슈나우저',
//         size: 'L',
//         weight: {
//             male: 37.5,
//             female: 29,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '재패니즈 친',
//         size: 'S',
//         weight: {
//             male: 4,
//             female: 4,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '재패니즈 스피츠',
//         size: 'S',
//         weight: {
//             male: 8,
//             female: 8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '잭 러셀 테리어',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '저먼 셰퍼드',
//         size: 'L',
//         weight: {
//             male: 35,
//             female: 27,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '저먼 쇼트헤어드 포인터',
//         size: 'L',
//         weight: {
//             male: 28.5,
//             female: 23.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '저먼 와이어헤어드 포인터',
//         size: 'L',
//         weight: {
//             male: 29.5,
//             female: 29.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '저먼 핀셔',
//         size: 'M',
//         weight: {
//             male: 13.5,
//             female: 13.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '저먼 헌팅 테리어',
//         size: 'S',
//         weight: {
//             male: 9,
//             female: 9,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '진돗개',
//         size: 'M',
//         weight: {
//             male: 20.5,
//             female: 17,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '차우차우',
//         size: 'L',
//         weight: {
//             male: 28.5,
//             female: 23.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '차이니즈 샤페이',
//         size: 'L',
//         weight: {
//             male: 20,
//             female: 18.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '차이니즈 크레스티드',
//         size: 'S',
//         weight: {
//             male: 3.8,
//             female: 3.8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '체서피크 베이 레트리버',
//         size: 'L',
//         weight: {
//             male: 33,
//             female: 28,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '치와와',
//         size: 'S',
//         weight: {
//             male: 2.25,
//             female: 2.25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '카디건 웰시 코기',
//         size: 'M',
//         weight: {
//             male: 15,
//             female: 13,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '카발리에 킹 찰스 스패니얼',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '컬리코티드 레트리버',
//         size: 'L',
//         weight: {
//             male: 36,
//             female: 27.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '케리 블루 테리어',
//         size: 'M',
//         weight: {
//             male: 16.5,
//             female: 16.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '케언 테리어',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '케이넌 도그',
//         size: 'L',
//         weight: {
//             male: 22.5,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '케이스혼트',
//         size: 'M',
//         weight: {
//             male: 16.5,
//             female: 16.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '코몬도르',
//         size: 'L',
//         weight: {
//             male: 50,
//             female: 50,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '코커 스패니얼',
//         size: 'M',
//         weight: {
//             male: 13,
//             female: 13,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '코튼 드 툴리어',
//         size: 'S',
//         weight: {
//             male: 5.5,
//             female: 5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '콜리',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '쿠바스',
//         size: 'L',
//         weight: {
//             male: 46,
//             female: 46,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '쿠이커혼제',
//         size: 'M',
//         weight: {
//             male: 10,
//             female: 10,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '클럼버 스패니얼',
//         size: 'L',
//         weight: {
//             male: 35.5,
//             female: 28.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '토이 폭스 테리어',
//         size: 'S',
//         weight: {
//             male: 2,
//             female: 2,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '토이 푸들',
//         size: 'S',
//         weight: {
//             male: 2.5,
//             female: 2.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '티베탄 마스티프',
//         size: 'L',
//         weight: {
//             male: 55,
//             female: 43,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '티베탄 스패니얼',
//         size: 'S',
//         weight: {
//             male: 5.5,
//             female: 5.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '티베탄 테리어',
//         size: 'M',
//         weight: {
//             male: 11,
//             female: 11,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '파라오 하운드',
//         size: 'L',
//         weight: {
//             male: 22,
//             female: 22,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '파슨 레설 테리어',
//         size: 'S',
//         weight: {
//             male: 7,
//             female: 7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '파피용',
//         size: 'S',
//         weight: {
//             male: 3.5,
//             female: 3.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '퍼그',
//         size: 'S',
//         weight: {
//             male: 7.3,
//             female: 7.3,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '페키니즈',
//         size: 'S',
//         weight: {
//             male: 4.8,
//             female: 4.8,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '펨브록 웰시 코기',
//         size: 'M',
//         weight: {
//             male: 12,
//             female: 11.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '포르투기즈 워터 도그',
//         size: 'L',
//         weight: {
//             male: 23,
//             female: 19.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '포메라니안',
//         size: 'S',
//         weight: {
//             male: 2.7,
//             female: 2.7,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '포인터',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '폴리시 롤런드 시프도그',
//         size: 'M',
//         weight: {
//             male: 17,
//             female: 17,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '푸미',
//         size: 'M',
//         weight: {
//             male: 12.5,
//             female: 12.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '풀리',
//         size: 'M',
//         weight: {
//             male: 13.5,
//             female: 13.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '풍산개',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '프렌치 불도그',
//         size: 'M',
//         weight: {
//             male: 11.5,
//             female: 11.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '프티 바세 그리퐁 방댕',
//         size: 'M',
//         weight: {
//             male: 17.5,
//             female: 17.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '플랫코티드 레트리버',
//         size: 'L',
//         weight: {
//             male: 31.5,
//             female: 28.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '플롯 하운드',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 21.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '피니시 스피치',
//         size: 'M',
//         weight: {
//             male: 12.5,
//             female: 8.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '피레니안 마스티프',
//         size: 'L',
//         weight: {
//             male: 81,
//             female: 81,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '피레니안 쉽독',
//         size: 'M',
//         weight: {
//             male: 11.5,
//             female: 11.5,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '피레니안 셰퍼드',
//         size: 'L',
//         weight: {
//             male: 22.5,
//             female: 17,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '필드 스패니얼',
//         size: 'L',
//         weight: {
//             male: 18,
//             female: 18,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '해리어',
//         size: 'L',
//         weight: {
//             male: 22,
//             female: 22,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '허배너스',
//         size: 'S',
//         weight: {
//             male: 6,
//             female: 6,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '훗카이도 이누',
//         size: 'L',
//         weight: {
//             male: 25,
//             female: 25,
//         }
//     },
//     {
//         type: 'DOG',
//         name: '휘핏',
//         size: 'S',
//         weight: {
//             male: 8.5,
//             female: 8.5,
//         }
//     }
// ]