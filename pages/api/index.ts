import * as admin from 'firebase-admin'

export function adminFirebaseInit() {
    try {
        // 이미 initial 되있다면 하지않는다
        // if (!admin.app.length) {
            // console.log('admin.app.length-------', admin.app.length);
            admin.initializeApp({
                credential: admin.credential.cert({
                    "projectId": "playpet-production",
                    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCtI+1vt3iulTL7\nAsKUzQDZcyg2309VgzUCrb7Bob+KC8oeVgbTErpgdi0eVPxKA1bQ4dwBa20Y2EE9\n5jvR7H/1Xyc3CTA0HY+OCsENvB8VIlFpf6I5XNhZ17g2RWG9+NpKIm8YAyTj27N2\n7AADG2UCJgrS8JqX8RsGQrLS6nlXagkukcWhMFZ9rrr9X3tp9CiiyqvpuY7/kB7w\n7nN8QvxmzyMGxjP7S9XGL+8tA8+0d2litDPdt0UQknEEjUadEp/XCilAdgaqTW0s\nshGv1p3VRkSmiyoM+0yTd/Z4xnm21o2SOgVPZOEdHAs5S9E1IpIMSafKeeM5YAor\n54JbSp89AgMBAAECggEAGV5aw1Q0JAxrYFj6rrfM6I+VdFjK9IIZic9wVEnBWVY5\n4rEDJfkoAss9+CRGpQeROGDnjfOyFAJXqNyrpioLY6XyBn/bpr8wEgVkXQFT4pJZ\nMGaJm/MNJjjT3mvTEvU78sHR2khXpuVBieqxY8MnTSXKzzZ+yEWFCqlKL1o4tkRu\n5II0EW0I5KxC8E6/GFNik/GpTkeXmxhWen7ngsw8aKvUVBIbyiknOu7YAOuKr9g5\nalkRPqfHG5CM+EUhpdSeYZ6HF/6HDiatiX94XdyUs/HFzjImGrvqOqb6SXpDKslq\n+QXuQj1E0sSBQSEEjJL4dSMExymAWLWo/SD9svkKIQKBgQDYnz+ItBhCV6TCbULI\nEwT+GG8LrxHq+EOxiCI6Pud5Im2POGFft57xgCIHZtCntO0ifRI5YIE5ZCSYb6Bs\ncA2wA6N8yHch1UfCs15O1Pi2OfcYSfVY2LqeQwQpzUrSRqVUDDpd3K56jymPbK3H\n3RhCum/8Q3BT78i32WtHThHWDQKBgQDMnTVZop4Mc6Qq9hgND5tPgjvQbnUY0dxS\nP18lKNYTSREhtIyHeifxS2ydoGG9wyGvFM682Iv2fyFHQ61PnOqXY56IkiHev7pm\nhuWUgvHHHwJLFnwVIt64goOHxNyckrbgVbvZ1JfLJ2shr5Pf2HkUhNMFTJ5SHHFT\ngDh3W15R8QKBgHSF7RIm9imxpXHkfhjLilL4Z7tcOAIx+4/iz66PKcpSR6bTyCVJ\ny5jSuPtMRg8AVtLHfmcYz0pE4R6SZTQPbn1w55924gZ0CL7l52P2UbcMJSuOlQhu\nxKvfFr05rfbAg6xbS4Yz8DMDEXMSHcS13JgAW77Rs/misVCcBoX7q8J9AoGBAMxa\n3qOtREiPXpEBxDeXNLiOC4s6Jn0pa/BBFpeYV2ZffVq6ZfgQyr+1Yr9zJOtPbd7c\n2zXE2NTRV71DHF79C1czyWwA9w7vUg2AAN74gN0sXS/9PuQlNWf2AcOhm+xMo5Ue\nS0VdjFT8A4VbREc2foc9uTv7r8u2WIDa+IpMmMEhAoGAUpCAZteUiKwhZicV2Ist\nbXH9KEugz946UqNn/zd36EYa8l2KnTPM1fvWu9MulnpihvNbmOmQ7AIC5glPO+SI\nT1TmAgMwqhQawrwYPRdKXCna6f5cgGKdw2O1P0PvGtDt9PO0wjci8gYfUQVdxLlF\nxAe4CBvolNZfMH229ZPSgHQ=\n-----END PRIVATE KEY-----\n",
                    "clientEmail": "firebase-adminsdk-fpfas@playpet-production.iam.gserviceaccount.com",
                }),
                databaseURL: "https://playpet-production.firebaseio.com",
            })
        // }
    } catch (error) {
        if (!/already exists/.test(error.message)) {
            console.log('error-------error', error);
            console.error("Firebase admin initialization error", error);
        }
    }
}
adminFirebaseInit()
export const firestore = admin.firestore()
