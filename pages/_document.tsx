import { ServerStyleSheets } from '@material-ui/core/styles';
import { extractCritical } from 'emotion-server';
import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheets.collect(<App {...props} />),
            });
        const initialProps = await Document.getInitialProps(ctx);
        const styles = extractCritical(initialProps.html);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheets.getStyleElement()}
                    <style
                        data-emotion-css={styles.ids.join(' ')}
                        dangerouslySetInnerHTML={{ __html: styles.css }}
                    />
                </>
            ),
        };
    }

    render() {
        return (
            <Html lang="ko">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
