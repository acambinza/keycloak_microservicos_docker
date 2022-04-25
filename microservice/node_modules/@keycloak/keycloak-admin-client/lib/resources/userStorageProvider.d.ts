import { KeycloakAdminClient } from '../client';
import SynchronizationResultRepresentation from '../defs/synchronizationResultRepresentation';
import Resource from './resource';
declare type ActionType = 'triggerFullSync' | 'triggerChangedUsersSync';
declare type DirectionType = 'fedToKeycloak' | 'keycloakToFed';
declare type NameResponse = {
    id: string;
    name: string;
};
export declare class UserStorageProvider extends Resource<{
    realm?: string;
}> {
    name: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<NameResponse>;
    removeImportedUsers: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    sync: (payload?: ({
        id: string;
        action?: ActionType | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<SynchronizationResultRepresentation>;
    unlinkUsers: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    mappersSync: (payload?: ({
        id: string;
        parentId: string;
        direction?: DirectionType | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<SynchronizationResultRepresentation>;
    constructor(client: KeycloakAdminClient);
}
export {};
