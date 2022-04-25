import Resource from './resource';
import UserRepresentation from '../defs/userRepresentation';
import UserConsentRepresentation from '../defs/userConsentRepresentation';
import UserSessionRepresentation from '../defs/userSessionRepresentation';
import { KeycloakAdminClient } from '../client';
import MappingsRepresentation from '../defs/mappingsRepresentation';
import RoleRepresentation, { RoleMappingPayload } from '../defs/roleRepresentation';
import { RequiredActionAlias } from '../defs/requiredActionProviderRepresentation';
import FederatedIdentityRepresentation from '../defs/federatedIdentityRepresentation';
import GroupRepresentation from '../defs/groupRepresentation';
import CredentialRepresentation from '../defs/credentialRepresentation';
import UserProfileConfig from '../defs/userProfileConfig';
export interface UserQuery {
    email?: string;
    first?: number;
    firstName?: string;
    lastName?: string;
    max?: number;
    search?: string;
    username?: string;
    exact?: boolean;
    [key: string]: string | number | undefined | boolean;
}
export declare class Users extends Resource<{
    realm?: string;
}> {
    find: (payload?: (UserQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserRepresentation[]>;
    create: (payload?: (UserRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        id: string;
    }>;
    findOne: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserRepresentation | undefined>;
    update: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: UserRepresentation) => Promise<void>;
    del: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    count: (payload?: (UserQuery & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<number>;
    getProfile: (payload?: {
        realm?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserProfileConfig>;
    updateProfile: (payload?: (UserProfileConfig & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserProfileConfig>;
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
    executeActionsEmail: (payload?: ({
        id: string;
        clientId?: string | undefined;
        lifespan?: number | undefined;
        redirectUri?: string | undefined;
        actions?: RequiredActionAlias[] | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listGroups: (payload?: ({
        id: string;
        briefRepresentation?: boolean | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<GroupRepresentation[]>;
    addToGroup: (payload?: ({
        id: string;
        groupId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<string>;
    delFromGroup: (payload?: ({
        id: string;
        groupId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<string>;
    countGroups: (payload?: ({
        id: string;
        search?: string | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        count: number;
    }>;
    listFederatedIdentities: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<FederatedIdentityRepresentation[]>;
    addToFederatedIdentity: (payload?: ({
        id: string;
        federatedIdentityId: string;
        federatedIdentity: FederatedIdentityRepresentation;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    delFromFederatedIdentity: (payload?: ({
        id: string;
        federatedIdentityId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    removeTotp: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    resetPassword: (payload?: ({
        id: string;
        credential: CredentialRepresentation;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    getCredentials: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<CredentialRepresentation[]>;
    deleteCredential: (payload?: ({
        id: string;
        credentialId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    updateCredentialLabel: (query: {
        id: string;
        credentialId: string;
    } & {
        realm?: string | undefined;
    }, payload: string) => Promise<void>;
    moveCredentialPositionDown: (payload?: ({
        id: string;
        credentialId: string;
        newPreviousCredentialId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    moveCredentialPositionUp: (payload?: ({
        id: string;
        credentialId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    sendVerifyEmail: (payload?: ({
        id: string;
        clientId?: string | undefined;
        redirectUri?: string | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listSessions: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserSessionRepresentation[]>;
    listOfflineSessions: (payload?: ({
        id: string;
        clientId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserSessionRepresentation[]>;
    logout: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listConsents: (payload?: ({
        id: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<UserConsentRepresentation[]>;
    impersonation: (query: {
        id: string;
    } & {
        realm?: string | undefined;
    }, payload: {
        user: string;
        realm: string;
    }) => Promise<Record<string, any>>;
    revokeConsent: (payload?: ({
        id: string;
        clientId: string;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
