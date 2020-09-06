import * as admin from 'firebase-admin'
import { isProduction } from '../../src/utils';
import * as SentryNode from '@sentry/node';

export const firestore = admin.firestore
export const auth = admin.auth
export const Sentry = SentryNode

adminFirebaseInit()
sentryInit()

function adminFirebaseInit() {
    try {
        // 이미 initial 되있다면 하지않는다
        // if (!admin.app.length) {
            // console.log('admin.app.length-------', admin.app.length);
            const devApp = {
                databaseURL: "https://playpet-5b432.firebaseio.com",
                cert: {
                    projectId: "playpet-5b432",
                    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDjvqvDcSnPDc/v\nFAw+7d+7oFJt9ea33z/i/4XfJ6shqQmhV/w4CKVMSfVtjrgwMCkaZbXgSBSdeIGs\naFl7FtaUPM/I0q15gg5IU0Wc4rJSAWSUifSxXiN7V0bJP1w4kNHT2F3z1UBDa5Kf\nFG5sXmM9dDGOHTBa6qx/0not/ycMT3ZM1fgdYhvGyui22M0u5KCu04mtzmiDogry\nIYxLjMIWbAHMxJSEzmhuunEBU7JYpoFQfw1P8rH22SFUWC8/pEo7DGr9xm7xIItY\n4Q0ZGY20CgcwXXCb4MMQdJ0WlBr324K7H6HxKXPXU3eOV0QWHzw29ODK8H3xQCCM\nXBuRXuBpAgMBAAECggEAUW3kyyokiUBGhxSTdlKmCtd9cYyZFEhR9u9m5c2wrgXb\nCCHF8CEDPT46bxQ2/h/SKnqQZ6NOH6mtL8BVsiGN0o3Vu1e8p/Pc+HYxrzENEi4m\nUMfswhhHNnwTtrQdXKpHI+g6W4r1gcWuNIvhGYU8FYZ8i3QbTH6Y89EFV3nh88+u\nypS5kSb+3TJOZoPzQ2gSxhzjfA97Bdlh51R861LXyV8lz/oLeiSr5JPqH16RMFQq\npdLA67cSHY2X1/5Au3dF8Hs/bbFufHaAfUPvnYenEf5VSapp/axT7TH1jS1nIDG9\nYn5g/j4aJT+01JGh0OR5b3ea2WZmfR7uHdDFgH+5YwKBgQD7wFHlVWdB/u6KP9PK\nn3ldF/dROK3YU6ED+QB33w7TYRHn97V1oMNNPdTv+vWfC3z4i8orpphQiiLXExPz\nR5JPC0kFFKHIR+jT/FJ51uWcxggmuj/sfteHiy//Np+fxJK+gZu2zorb9GrEKt+x\n8AOQVFt57fL0G9Msp+pl0LFLywKBgQDnlqHdPTW7FbdIdV22ZIjimybogOTQQk9U\nU0XGLPGdtUga/Sv39+t3jyM7x3WTDdN+pBocHx0aprMeEsTJRqi94jXLcsLsyirl\nc4F2CNwwweYR0g7QlP0ykToIfCOm7pmqTXS9BP1oOOPs9zpi/w2zQpopwRRqpIEc\nuMtpYktmGwKBgQCaVZefQVERG2k/ZcvADy4GzTd4Gogw82vllJQd6KgdHAgvLiOX\nXhv80WgmSrKjcxaFBKXHRtVfop+jPHXhkcH3JVL5g2F+996bfrdNLFoNVzYOD+Y6\nZLRayxB8pA8NkiPoGGrOkiZ8m4WMh0AlxJ9arux5fk+QKTK30KUZD+xxKwKBgQCt\nNxNWIMQhbDqsLWysUUG5DAbr/AwoYJBpJ+eWNGN7a+3Ekfvi+kHaKOtXePZNyReZ\nLzCAPB1Oo8RxB+S8DueDLsDBrNJyvTucZuo72KCorz5fsdd21xkSS2E2m3MnFmtE\n364i+qp226ZOxROcm9wpafVYqZuVr/kJ/IXYCrcOZQKBgQCUc+0f2xaJKZ0/M3gm\nl5sCDiDOGd0S/auFtx9/6+TXz2PYTajAG+3orFudh5hkXbX50WR609biHQ4fFkXJ\n/OOgI04npfyvSM/pOO/HJVZ71K2d9zlqf2GKwt8xOoB55/w5kDT9lVCgLerM12Ni\nrPpAznZEzsisfJsbSQZ1BcZh1w==\n-----END PRIVATE KEY-----\n",
                    clientEmail: "firebase-adminsdk-921ca@playpet-5b432.iam.gserviceaccount.com",
                }
            }
            const prodApp = {
                databaseURL: "https://playpet-production.firebaseio.com",
                cert: {
                    projectId: "playpet-production",
                    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtI+1vt3iulTL7\nAsKUzQDZcyg2309VgzUCrb7Bob+KC8oeVgbTErpgdi0eVPxKA1bQ4dwBa20Y2EE9\n5jvR7H/1Xyc3CTA0HY+OCsENvB8VIlFpf6I5XNhZ17g2RWG9+NpKIm8YAyTj27N2\n7AADG2UCJgrS8JqX8RsGQrLS6nlXagkukcWhMFZ9rrr9X3tp9CiiyqvpuY7/kB7w\n7nN8QvxmzyMGxjP7S9XGL+8tA8+0d2litDPdt0UQknEEjUadEp/XCilAdgaqTW0s\nshGv1p3VRkSmiyoM+0yTd/Z4xnm21o2SOgVPZOEdHAs5S9E1IpIMSafKeeM5YAor\n54JbSp89AgMBAAECggEAGV5aw1Q0JAxrYFj6rrfM6I+VdFjK9IIZic9wVEnBWVY5\n4rEDJfkoAss9+CRGpQeROGDnjfOyFAJXqNyrpioLY6XyBn/bpr8wEgVkXQFT4pJZ\nMGaJm/MNJjjT3mvTEvU78sHR2khXpuVBieqxY8MnTSXKzzZ+yEWFCqlKL1o4tkRu\n5II0EW0I5KxC8E6/GFNik/GpTkeXmxhWen7ngsw8aKvUVBIbyiknOu7YAOuKr9g5\nalkRPqfHG5CM+EUhpdSeYZ6HF/6HDiatiX94XdyUs/HFzjImGrvqOqb6SXpDKslq\n+QXuQj1E0sSBQSEEjJL4dSMExymAWLWo/SD9svkKIQKBgQDYnz+ItBhCV6TCbULI\nEwT+GG8LrxHq+EOxiCI6Pud5Im2POGFft57xgCIHZtCntO0ifRI5YIE5ZCSYb6Bs\ncA2wA6N8yHch1UfCs15O1Pi2OfcYSfVY2LqeQwQpzUrSRqVUDDpd3K56jymPbK3H\n3RhCum/8Q3BT78i32WtHThHWDQKBgQDMnTVZop4Mc6Qq9hgND5tPgjvQbnUY0dxS\nP18lKNYTSREhtIyHeifxS2ydoGG9wyGvFM682Iv2fyFHQ61PnOqXY56IkiHev7pm\nhuWUgvHHHwJLFnwVIt64goOHxNyckrbgVbvZ1JfLJ2shr5Pf2HkUhNMFTJ5SHHFT\ngDh3W15R8QKBgHSF7RIm9imxpXHkfhjLilL4Z7tcOAIx+4/iz66PKcpSR6bTyCVJ\ny5jSuPtMRg8AVtLHfmcYz0pE4R6SZTQPbn1w55924gZ0CL7l52P2UbcMJSuOlQhu\nxKvfFr05rfbAg6xbS4Yz8DMDEXMSHcS13JgAW77Rs/misVCcBoX7q8J9AoGBAMxa\n3qOtREiPXpEBxDeXNLiOC4s6Jn0pa/BBFpeYV2ZffVq6ZfgQyr+1Yr9zJOtPbd7c\n2zXE2NTRV71DHF79C1czyWwA9w7vUg2AAN74gN0sXS/9PuQlNWf2AcOhm+xMo5Ue\nS0VdjFT8A4VbREc2foc9uTv7r8u2WIDa+IpMmMEhAoGAUpCAZteUiKwhZicV2Ist\nbXH9KEugz946UqNn/zd36EYa8l2KnTPM1fvWu9MulnpihvNbmOmQ7AIC5glPO+SI\nT1TmAgMwqhQawrwYPRdKXCna6f5cgGKdw2O1P0PvGtDt9PO0wjci8gYfUQVdxLlF\nxAe4CBvolNZfMH229ZPSgHQ=\n-----END PRIVATE KEY-----\n",
                    clientEmail: "firebase-adminsdk-fpfas@playpet-production.iam.gserviceaccount.com",
                }
            }
            admin.initializeApp({
                credential: admin.credential.cert(isProduction ? prodApp.cert : devApp.cert),
                databaseURL: isProduction ? prodApp.databaseURL : devApp.databaseURL,
            })
        // }
    } catch (error) {
        if (!/already exists/.test(error.message)) {
            console.log('error-------error', error);
            console.error("Firebase admin initialization error", error);
            SentryNode.captureException(error)
        }
    }
}

function sentryInit() {
    SentryNode.init({
        dsn: "https://c75644eaf6214d52a4f0deebfacd00bf@o444254.ingest.sentry.io/5418946",
        tracesSampleRate: 1.0,
        environment: !isProduction ? 'development' : 'production',
        debug: !isProduction,
    });
}