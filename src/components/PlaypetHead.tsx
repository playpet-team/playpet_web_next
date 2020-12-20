import Head from 'next/head';
import { useRouter } from 'next/router';
import { removeSpace, ROOT_URL } from '../utils';

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
            "https://www.facebook.com/playpet.me"
        ]
}`;

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
}`;

export default function SEO({
    title = '🐶Playpet-우리집 반려동물 건강과 사료 관리가 쉬워진다',
    description = '반려동물을 위한 건강한 문화, 우리 함께 만들어요',
    keywords = '반려동물, 애완동물, 반려동물 쇼핑몰, 반려동물 사료, 댕댕이 사료, 반려견, 반려묘, 고양이사료, 사료관리',
}) {
    const route = useRouter();

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta property="og:url" content="https://playpet.me" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>{title}</title>
                <meta name="robots" content="index, follow" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/web%2Fassets%2Fimages%2Fplaypet-og-img.jpg?alt=media&token=da139299-667a-495b-8d16-873d61e45fbf"
                />
                <link rel="canonical" href={ROOT_URL + route.asPath} />
                <meta property="og:site_name" content="플레이펫" />
                <meta property="og:locale" content="ko_KR" />
                <link
                    rel="shortcut icon"
                    href="https://playpet.me/logo/playpet.ico"
                />
                <meta
                    name="naver-site-verification"
                    content="6627b9d77d737924f4326cc7692eb0c27e9b1cec"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: removeSpace(ORGANIZATION({ description })),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: removeSpace(BREADCRUMBS()),
                    }}
                />
            </Head>
        </div>
    );
}
