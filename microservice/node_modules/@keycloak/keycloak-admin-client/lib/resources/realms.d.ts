import Resource from './resource';
import AdminEventRepresentation from '../defs/adminEventRepresentation';
import RealmRepresentation, { PartialImportRealmRepresentation, PartialImportResponse } from '../defs/realmRepresentation';
import EventRepresentation from '../defs/eventRepresentation';
import EventType from '../defs/eventTypes';
import KeysMetadataRepresentation from '../defs/keyMetadataRepresentation';
import ClientInitialAccessPresentation from '../defs/clientInitialAccessPresentation';
import TestLdapConnectionRepresentation from '../defs/testLdapConnection';
import { KeycloakAdminClient } from '../client';
import { RealmEventsConfigRepresentation } from '../defs/realmEventsConfigRepresentation';
import GlobalRequestResult from '../defs/globalRequestResult';
import GroupRepresentation from '../defs/groupRepresentation';
export declare class Realms extends Resource {
    find: (payload?: {
        briefRepresentation?: boolean | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RealmRepresentation[]>;
    create: (payload?: RealmRepresentation | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<{
        realmName: string;
    }>;
    findOne: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RealmRepresentation | undefined>;
    update: (query: {
        realm: string;
    }, payload: RealmRepresentation) => Promise<void>;
    del: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    partialImport: (payload?: {
        realm: string;
        rep: PartialImportRealmRepresentation;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<PartialImportResponse>;
    export: (payload?: {
        realm: string;
        exportClients?: boolean | undefined;
        exportGroupsAndRoles?: boolean | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RealmRepresentation>;
    getDefaultGroups: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<GroupRepresentation[]>;
    addDefaultGroup: (payload?: {
        realm: string;
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    removeDefaultGroup: (payload?: {
        realm: string;
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    findEvents: (payload?: {
        realm: string;
        client?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
        first?: number | undefined;
        ipAddress?: string | undefined;
        max?: number | undefined;
        type?: EventType | EventType[] | undefined;
        user?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<EventRepresentation[]>;
    getConfigEvents: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RealmEventsConfigRepresentation>;
    updateConfigEvents: (query: {
        realm: string;
    }, payload: RealmEventsConfigRepresentation) => Promise<void>;
    clearEvents: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    clearAdminEvents: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    getClientsInitialAccess: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientInitialAccessPresentation[]>;
    createClientsInitialAccess: (query: {
        realm: string;
    }, payload: {
        count?: number | undefined;
        expiration?: number | undefined;
    }) => Promise<ClientInitialAccessPresentation>;
    delClientsInitialAccess: (payload?: {
        realm: string;
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    removeSession: (payload?: {
        realm: string;
        sessionId: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    findAdminEvents: (payload?: {
        realm: string;
        authClient?: string | undefined;
        authIpAddress?: string | undefined;
        authRealm?: string | undefined;
        authUser?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
        first?: number | undefined;
        max?: number | undefined;
        operationTypes?: string | undefined;
        resourcePath?: string | undefined;
        resourceTypes?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AdminEventRepresentation[]>;
    getUsersManagementPermissions: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    updateUsersManagementPermissions: (payload?: {
        realm: string;
        enabled: boolean;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    logoutAll: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    deleteSession: (payload?: {
        realm: string;
        session: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    pushRevocation: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<GlobalRequestResult>;
    getKeys: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<KeysMetadataRepresentation>;
    testLDAPConnection: (query: {
        realm: string;
    }, payload: TestLdapConnectionRepresentation) => Promise<any>;
    testSMTPConnection: (query: {
        realm: string;
    }, payload: Record<string, string | number>) => Promise<any>;
    getRealmSpecificLocales: (payload?: {
        realm: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<string[]>;
    getRealmLocalizationTexts: (payload?: {
        realm: string;
        selectedLocale: string;
        first?: number | undefined;
        max?: number | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<Record<string, string>>;
    addLocalization: (query: {
        realm: string;
        selectedLocale: string;
        key: string;
    }, payload: string) => Promise<void>;
    deleteRealmLocalizationTexts: (payload?: {
        realm: string;
        selectedLocale: string;
        key?: string | undefined;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    constructor(client: KeycloakAdminClient);
}
