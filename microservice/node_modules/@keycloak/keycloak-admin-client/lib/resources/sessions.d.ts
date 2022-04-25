import Resource from './resource';
import KeycloakAdminClient from '..';
export declare class Sessions extends Resource<{
    realm?: string;
}> {
    find: (payload?: {
        realm?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<Record<string, any>[]>;
    constructor(client: KeycloakAdminClient);
}
