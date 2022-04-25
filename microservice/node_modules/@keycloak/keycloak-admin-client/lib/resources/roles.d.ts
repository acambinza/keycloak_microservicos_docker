import Resource from './resource';
import RoleRepresentation from '../defs/roleRepresentation';
import UserRepresentation from '../defs/userRepresentation';
import { KeycloakAdminClient } from '../client';
export interface RoleQuery {
    first?: number;
    max?: number;
    search?: string;
    briefRepresentation?: boolean;
}
export declare class Roles extends Resource<{
    realm?: string;
}> {
    find: (payload?: (RoleQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    create: (payload?: (RoleRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        roleName: string;
    }>;
    findOneByName: (payload?: ({
        name: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation | undefined>;
    updateByName: (query: {
        name: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation) => Promise<void>;
    delByName: (payload?: ({
        name: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    findUsersWithRole: (payload?: ({
        name: string;
        first?: number | undefined;
        max?: number | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserRepresentation[]>;
    findOneById: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation | undefined>;
    createComposite: (query: {
        roleId: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    getCompositeRoles: (payload?: ({
        id: string;
        search?: string | undefined;
        first?: number | undefined;
        max?: number | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    getCompositeRolesForRealm: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    getCompositeRolesForClient: (payload?: ({
        id: string;
        clientId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    delCompositeRoles: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    updateById: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation) => Promise<void>;
    delById: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
