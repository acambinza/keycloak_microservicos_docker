import Resource from './resource';
import KeycloakAdminClient from '..';
export declare class AttackDetection extends Resource<{
    realm?: string;
}> {
    findOne: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<Record<string, any> | undefined>;
    del: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    delAll: (payload?: {
        realm?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
