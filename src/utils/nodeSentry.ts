import { isProduction } from '.';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

export const sentryInit = () => {
    Sentry.init({
        dsn: "https://c75644eaf6214d52a4f0deebfacd00bf@o444254.ingest.sentry.io/5418946",
        tracesSampleRate: 1.0,
        environment: isProduction ? 'production' : 'development',
        debug: !isProduction,
    });
}