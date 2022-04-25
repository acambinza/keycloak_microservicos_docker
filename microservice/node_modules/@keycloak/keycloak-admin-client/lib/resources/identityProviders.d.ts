import Resource from './resource';
import IdentityProviderRepresentation from '../defs/identityProviderRepresentation';
import IdentityProviderMapperRepresentation from '../defs/identityProviderMapperRepresentation';
import { IdentityProviderMapperTypeRepresentation } from '../defs/identityProviderMapperTypeRepresentation';
import { KeycloakAdminClient } from '../client';
export declare class IdentityProviders extends Resource<{
    realm?: string;
}> {
    find: (payload?: (void & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<IdentityProviderRepresentation[]>;
    create: (payload?: (IdentityProviderRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        id: string;
    }>;
    findOne: (payload?: ({
        alias: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<IdentityProviderRepresentation | undefined>;
    update: (query: {
        alias: string;
    } & {
        realm?: string | undefined;
    }, payload: IdentityProviderRepresentation) => Promise<void>;
    del: (payload?: ({
        alias: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    findFactory: (payload?: ({
        providerId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    findMappers: (payload?: ({
        alias: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<IdentityProviderMapperRepresentation[]>;
    findOneMapper: (payload?: ({
        alias: string;
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<IdentityProviderMapperRepresentation | undefined>;
    createMapper: (payload?: ({
        alias: string;
        identityProviderMapper: IdentityProviderMapperRepresentation;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        id: string;
    }>;
    updateMapper: (query: {
        alias: string;
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: IdentityProviderMapperRepresentation) => Promise<void>;
    delMapper: (payload?: ({
        alias: string;
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    findMapperTypes: (payload?: ({
        alias: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<Record<string, IdentityProviderMapperTypeRepresentation>>;
    importFromUrl: (payload?: ({
        fromUrl: string;
        providerId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<Record<string, string>>;
    constructor(client: KeycloakAdminClient);
}
