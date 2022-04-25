import ClientScopeRepresentation from '../defs/clientScopeRepresentation';
import Resource from './resource';
import { KeycloakAdminClient } from '../client';
import ProtocolMapperRepresentation from '../defs/protocolMapperRepresentation';
import MappingsRepresentation from '../defs/mappingsRepresentation';
import RoleRepresentation from '../defs/roleRepresentation';
export declare class ClientScopes extends Resource<{
    realm?: string;
}> {
    find: (payload?: {
        realm?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientScopeRepresentation[]>;
    create: (payload?: (ClientScopeRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    findOne: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientScopeRepresentation | undefined>;
    update: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: ClientScopeRepresentation) => Promise<void>;
    del: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listDefaultClientScopes: (payload?: (void & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientScopeRepresentation[]>;
    addDefaultClientScope: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    delDefaultClientScope: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listDefaultOptionalClientScopes: (payload?: (void & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientScopeRepresentation[]>;
    addDefaultOptionalClientScope: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    delDefaultOptionalClientScope: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    addMultipleProtocolMappers: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: ProtocolMapperRepresentation[]) => Promise<void>;
    addProtocolMapper: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: ProtocolMapperRepresentation) => Promise<void>;
    listProtocolMappers: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ProtocolMapperRepresentation[]>;
    findProtocolMapper: (payload?: ({
        id: string;
        mapperId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ProtocolMapperRepresentation | undefined>;
    findProtocolMappersByProtocol: (payload?: ({
        id: string;
        protocol: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ProtocolMapperRepresentation[]>;
    updateProtocolMapper: (query: {
        id: string;
        mapperId: string;
    } & {
        realm?: string | undefined;
    }, payload: ProtocolMapperRepresentation) => Promise<void>;
    delProtocolMapper: (payload?: ({
        id: string;
        mapperId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listScopeMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<MappingsRepresentation>;
    addClientScopeMappings: (query: {
        id: string;
        client: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    listClientScopeMappings: (payload?: ({
        id: string;
        client: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listAvailableClientScopeMappings: (payload?: ({
        id: string;
        client: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listCompositeClientScopeMappings: (payload?: ({
        id: string;
        client: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    delClientScopeMappings: (query: {
        id: string;
        client: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    addRealmScopeMappings: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    listRealmScopeMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listAvailableRealmScopeMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    listCompositeRealmScopeMappings: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RoleRepresentation[]>;
    delRealmScopeMappings: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: RoleRepresentation[]) => Promise<void>;
    constructor(client: KeycloakAdminClient);
    findOneByName(payload: {
        realm?: string;
        name: string;
    }): Promise<ClientScopeRepresentation | undefined>;
    delByName(payload: {
        realm?: string;
        name: string;
    }): Promise<void>;
    findProtocolMapperByName(payload: {
        realm?: string;
        id: string;
        name: string;
    }): Promise<ProtocolMapperRepresentation | undefined>;
}
