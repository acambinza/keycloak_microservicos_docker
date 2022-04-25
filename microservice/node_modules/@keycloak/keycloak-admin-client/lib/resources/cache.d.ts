import Resource from './resource';
import { KeycloakAdminClient } from '../client';
export declare class Cache extends Resource<{
    realm?: string;
}> {
    clearUserCache: (payload?: {
        realm?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
