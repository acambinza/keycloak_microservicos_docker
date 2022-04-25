import { AxiosRequestConfig } from 'axios';
export declare type GrantTypes = 'client_credentials' | 'password' | 'refresh_token';
export interface Credentials {
    username?: string;
    password?: string;
    grantType: GrantTypes;
    clientId: string;
    clientSecret?: string;
    totp?: string;
    offlineToken?: boolean;
    refreshToken?: string;
}
export interface Settings {
    realmName?: string;
    baseUrl?: string;
    credentials: Credentials;
    requestConfig?: AxiosRequestConfig;
}
export interface TokenResponseRaw {
    access_token: string;
    expires_in: string;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    not_before_policy: number;
    session_state: string;
    scope: string;
}
export interface TokenResponse {
    accessToken: string;
    expiresIn: string;
    refreshExpiresIn: number;
    refreshToken: string;
    tokenType: string;
    notBeforePolicy: number;
    sessionState: string;
    scope: string;
}
export declare const getToken: (settings: Settings) => Promise<TokenResponse>;
