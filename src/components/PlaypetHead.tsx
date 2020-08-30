import Head from 'next/head'
import { removeSpace } from '../utils'

export default function PlaypetHead({
    title = 'Playpet (플레이펫 - 반려동물 미디어 쇼핑몰)',
    description = '반려인의 리뷰 영상을 한 곳에!',
    keywords = '반려동물, 반려동물 쇼핑몰, 반려동물 미디어 커머스, 댕댕이 쇼핑몰',
}) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta property="og:url" content="https://playpet.me" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{title}</title>
                <meta name="robots" content="index, follow" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/playpet-5b432.appspot.com/o/web%2Fassets%2Fimages%2FiShot2020-08-26PM04.02.50.jpg?alt=media&token=1ae9a3f1-b132-4a74-8a27-49980526133f" />
                <link rel="canonical" href="https://playpet.me" />
                <meta property="og:site_name" content="플레이펫" />
                <meta property="og:locale" content="ko_KR" />
                <link rel="icon" href="/logo/playpet.ico" />
                <meta name="naver-site-verification" content="6627b9d77d737924f4326cc7692eb0c27e9b1cec" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: removeSpace(ORGANIZATION({ description })) }}>
                </script>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: removeSpace(BREADCRUMBS()) }}></script>
            </Head>
        </div>
    )
}

const ORGANIZATION = ({ description }) => `
    {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://playpet.me",
        "name": "플레이펫",
        "alternateName": "playpet",
        "description": "${description}",
        "logo": "https://firebasestorage.googleapis.com/v0/b/playpet-5b432.appspot.com/o/web%2Fassets%2Flogos%2Flogo_b.png?alt=media&token=f0f0f7b7-d1f6-4a1d-9ac9-9c2775442387",
        "sameAs": [
            "https://www.instagram.com/playpet.me",
            "https://www.facebook.com/plapet.me"
        ]
}`

const BREADCRUMBS = () => `
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://playpet.me/"
        }]
}`