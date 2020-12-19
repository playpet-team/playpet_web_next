import { css } from '@emotion/core';
import normalize from './normalize';

const baseCSS = css`
    * {
        box-sizing: border-box;
    }
    font-family: 'Noto Sans KR';

    ${normalize};
    @font-face {
        font-family: 'Notosans Regular';
        src: url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Regular.woff2?alt=media&token=dbcf5821-61a5-4a89-a773-0e7152891e48')
            format('woff2')
            url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Regular.woff?alt=media&token=2820fefe-b297-41fd-8a67-ce92bee79bc6')
            format('woff')
            url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Regular.otf?alt=media&token=ff2199e3-6eaa-41cf-8548-5732ad32e121')
            format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Notosans Bold';
        src: url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Bold.woff2?alt=media&token=36095c59-e85c-40dd-8706-41f1e8456071')
            format('woff2')
            url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Bold.woff?alt=media&token=ebac433c-eef3-47ed-932c-91aae94bf84f')
            format('woff')
            url('https://firebasestorage.googleapis.com/v0/b/playpet-production.appspot.com/o/assets%2Ffonts%2FNotoSansKR-Bold.otf?alt=media&token=6cc2678f-99c2-4ea4-9ea7-5e0cebd520ad')
            format('opentype');
        font-weight: normal;
        font-style: normal;
    }
`;

export default baseCSS;
