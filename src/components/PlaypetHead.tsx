import Head from 'next/head'

export default function PlaypetHead() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta property="og:url" content="https://playpet.me" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Playpet (플레이펫 - 반려동물 미디어 쇼핑몰)</title>
                <meta name="robots" content="index, follow" />
                <meta name="title" content="Playpet (플레이펫 - 반려동물 미디어 쇼핑몰)" />
                <meta name="description" content="반려인의 리뷰 영상을 한 곳에!" />
                <meta name="keywords" content="반려동물, 반려동물 쇼핑몰, 반려동물 미디어 커머스, 댕댕이 쇼핑몰" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Playpet (플레이펫 - 반려동물 미디어 쇼핑몰)" />
                <meta property="og:description" content="반려인의 리뷰 영상을 한 곳에!" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/playpet-5b432.appspot.com/o/web%2Fassets%2Fimages%2FiShot2020-08-26PM04.02.50.jpg?alt=media&token=1ae9a3f1-b132-4a74-8a27-49980526133f" />
                <link rel="canonical" href="https://playpet.me" />
                <meta property="og:site_name" content="플레이펫" />
                <meta property="og:locale" content="ko_KR" />
                <link rel="icon" href="/logo/playpet.ico" />
                <script type="application/ld+json">
                    {`
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "url": "https://playpet.me",
                    "name": "플레이펫",
                    "alternateName": "playpet",
                    "description": "반려인의 리뷰 영상을 한 곳에!",
                    "logo": "https://firebasestorage.googleapis.com/v0/b/playpet-5b432.appspot.com/o/web%2Fassets%2Flogos%2Fplaypet_logo_b.png?alt=media&token=f0f0f7b7-d1f6-4a1d-9ac9-9c2775442387",
                    "sameAs": [
                        "https://www.instagram.com/playpet.me",
                        "https://www.facebook.com/plapet.me",
                    ]
                `}
                </script>
                <script type="application/ld+json">
                    {`
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "홈",
                        "item": "https://playpet.me/"
                    }]
                `}
                </script>
            </Head>
        </div>
    )
}
