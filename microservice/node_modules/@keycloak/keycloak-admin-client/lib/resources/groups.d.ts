import { KeycloakAdminClient } from '../client';
import GroupRepresentation from '../defs/groupRepresentation';
import { ManagementPermissionReference } from '../defs/managementPermissionReference';
import MappingsRepresentation from '../defs/mappingsRepresentation';
import RoleRepresentation, { RoleMappingPayload } from '../defs/roleRepresentation';
import UserRepresentation from '../defs/userRepresentation';
import Resource from './resource';
export interface GroupQuery {
    first?: number;
    max?: number;
    search?: string;
    briefRepresentation?: boolean;
}
export interface GroupCountQuery {
    search?: string;
    top?: boolean;
}
export declare class Groups extends Resource<{
    realm?: string;
}> {
    find: (payload?: (GroupQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<GroupRepresentation[]>;
    create: (payload?: (GroupRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        id: string;
    }>;
    findOne: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<GroupRepresentation | undefined>;
    update: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: GroupRepresentation) => Promise<void>;
    del: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    count: (payload?: (GroupCountQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        count: number;
    }>;
    setOrCreateChild: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: GroupRepresentation) => Promise<{
        id: string;
    }>;
    listMembers: (payload?: ({
        id: string;
        first?: number | undefined;
        max?: number | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserRepresentation[]>;
    listRoleMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<MappingsRepresentation>;
    addRealmRoleMappings: (payload?: ({
        id: string;
        roles: RoleMappingPayload[];
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listRealmRoleMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    delRealmRoleMappings: (payload?: ({
        id: string;
        roles: RoleMappingPayload[];
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listAvailableRealmRoleMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listCompositeRealmRoleMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listClientRoleMappings: (payload?: ({
        id: string;
        clientUniqueId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    addClientRoleMappings: (payload?: ({
        id: string;
        clientUniqueId: string;
        roles: RoleMappingPayload[];
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    delClientRoleMappings: (payload?: ({
        id: string;
        clientUniqueId: string;
        roles: RoleMappingPayload[];
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listAvailableClientRoleMappings: (payload?: ({
        id: string;
        clientUniqueId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listCompositeClientRoleMappings: (payload?: ({
        id: string;
        clientUniqueId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    updatePermission: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: ManagementPermissionReference) => Promise<ManagementPermissionReference>;
    listPermissions: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ManagementPermissionReference>;
    constructor(client: KeycloakAdminClient);
}
