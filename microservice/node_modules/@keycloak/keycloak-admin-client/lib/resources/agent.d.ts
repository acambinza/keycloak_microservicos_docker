import { AxiosRequestHeaders, Method } from 'axios';
import { KeycloakAdminClient } from '../client';
export interface RequestArgs {
    method: Method;
    path?: string;
    urlParamKeys?: string[];
    queryParamKeys?: string[];
    keyTransform?: Record<string, string>;
    catchNotFound?: boolean;
    payloadKey?: string;
    returnResourceIdInLocationHeader?: {
        field: string;
    };
    ignoredKeys?: string[];
    headers?: AxiosRequestHeaders;
}
export declare class Agent {
    private client;
    private basePath;
    private getBaseParams?;
    private getBaseUrl?;
    constructor({ client, path, getUrlParams, getBaseUrl, }: {
        client: KeycloakAdminClient;
        path?: string;
        getUrlParams?: () => Record<string, any>;
        getBaseUrl?: () => string;
    });
    request({ method, path, urlParamKeys, queryParamKeys, catchNotFound, keyTransform, payloadKey, returnResourceIdInLocationHeader, ignoredKeys, headers, }: RequestArgs): (payload?: any, options?: Pick<RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    updateRequest({ method, path, urlParamKeys, queryParamKeys, catchNotFound, keyTransform, payloadKey, returnResourceIdInLocationHeader, headers }: RequestArgs): (query?: any, payload?: any) => Promise<any>;
    private requestWithParams;
    private transformKey;
}
