import { Account, Org } from '@/graphql/gql/generated-models';
import { getIronSession, IronSession, SessionOptions } from 'iron-session';
import _ from 'lodash';
const cookies = require('next/headers').cookies

export namespace SessionService {
    export interface SessionData {
        account: Partial<Account>,
        accessToken: string,
        refreshToken: string,
        org?: Org
    }

    export const getSessionOptions = (): SessionOptions => {
        return {
            cookieName: process.env.SESSION_NAME,
            password: process.env.SESSION_SECRET,
            ttl: process.env.SESSION_EXPIRES_AT,
            cookieOptions: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: process.env.SESSION_EXPIRES_AT,
                path: '/',
            }
        }
    }
    
    export const getSession = async (): Promise<IronSession<SessionData>> => {
        return getIronSession<SessionData>(await cookies(), getSessionOptions());
    }
    
    export const createSession = async (account: Partial<Account>, accessToken: string, refreshToken: string, oldSession?: Partial<SessionData>): Promise<void> => {
        let session = await getSession();

        if (oldSession) {
            for (const key in oldSession) {
                _.set(session, key, _.get(oldSession, key))
            }
        }
        session.account = account
        session.accessToken = accessToken
        session.refreshToken = refreshToken
        await session.save()
    }
    
    export const refreshSession = async (account: Partial<Account>, accessToken: string, refreshToken: string): Promise<void> => {
        const oldSession = await getSession()
        await destroySession()
        await createSession(account, accessToken, refreshToken, {
            org: oldSession.org
        })
    }
    
    export const destroySession = async (): Promise<void> => {
        const session = await getSession();
        session.destroy()
    }

    export const appendSessionData = async (data: any): Promise<void> => {
        const session = await getSession();
        for (const key in data) {
            _.set(session, key, _.get(data, key))
        }
        await session.save()
    }
}