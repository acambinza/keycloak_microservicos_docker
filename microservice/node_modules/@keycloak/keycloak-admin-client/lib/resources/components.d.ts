import Resource from './resource';
import ComponentRepresentation from '../defs/componentRepresentation';
import ComponentTypeRepresentation from '../defs/componentTypeRepresentation';
import { KeycloakAdminClient } from '../client';
export interface ComponentQuery {
    name?: string;
    parent?: string;
    type?: string;
}
export declare class Components extends Resource<{
    realm?: string;
}> {
    find: (payload?: (ComponentQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ComponentRepresentation[]>;
    create: (payload?: (ComponentRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        id: string;
    }>;
    findOne: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ComponentRepresentation | undefined>;
    update: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: ComponentRepresentation) => Promise<void>;
    del: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listSubComponents: (payload?: ({
        id: string;
        type: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ComponentTypeRepresentation[]>;
    constructor(client: KeycloakAdminClient);
}
