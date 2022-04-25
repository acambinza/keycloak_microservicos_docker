import Resource from './resource';
import RequiredActionProviderRepresentation from '../defs/requiredActionProviderRepresentation';
import { KeycloakAdminClient } from '../client';
import AuthenticationExecutionInfoRepresentation from '../defs/authenticationExecutionInfoRepresentation';
import AuthenticationFlowRepresentation from '../defs/authenticationFlowRepresentation';
import AuthenticatorConfigRepresentation, { AuthenticationProviderRepresentation } from '../defs/authenticatorConfigRepresentation';
import AuthenticatorConfigInfoRepresentation from '../defs/authenticatorConfigInfoRepresentation';
import RequiredActionProviderSimpleRepresentation from '../defs/requiredActionProviderSimpleRepresentation';
export declare class AuthenticationManagement extends Resource {
    registerRequiredAction: (payload?: Record<string, any> | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    getRequiredActions: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RequiredActionProviderRepresentation[]>;
    getRequiredActionForAlias: (payload?: {
        alias: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    getClientAuthenticatorProviders: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationProviderRepresentation[]>;
    getAuthenticatorProviders: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationProviderRepresentation[]>;
    getFormActionProviders: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationProviderRepresentation[]>;
    updateRequiredAction: (query: {
        alias: string;
    }, payload: RequiredActionProviderRepresentation) => Promise<void>;
    deleteRequiredAction: (payload?: {
        alias: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    lowerRequiredActionPriority: (payload?: {
        alias: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    raiseRequiredActionPriority: (payload?: {
        alias: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    getUnregisteredRequiredActions: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<RequiredActionProviderSimpleRepresentation[]>;
    getFlows: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationFlowRepresentation[]>;
    getFlow: (payload?: {
        flowId: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationFlowRepresentation>;
    getFormProviders: (payload?: (void & {}) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationProviderRepresentation[]>;
    createFlow: (payload?: AuthenticationFlowRepresentation | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationFlowRepresentation>;
    copyFlow: (payload?: {
        flow: string;
        newName: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    deleteFlow: (payload?: {
        flowId: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    updateFlow: (query: {
        flowId: string;
    }, payload: AuthenticationFlowRepresentation) => Promise<any>;
    getExecutions: (payload?: {
        flow: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationExecutionInfoRepresentation[]>;
    addExecution: (query: {
        flow: string;
    }, payload: AuthenticationExecutionInfoRepresentation) => Promise<any>;
    addExecutionToFlow: (payload?: {
        flow: string;
        provider: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationExecutionInfoRepresentation>;
    addFlowToFlow: (payload?: {
        flow: string;
        alias: string;
        type: string;
        provider: string;
        description: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticationFlowRepresentation>;
    updateExecution: (query: {
        flow: string;
    }, payload: AuthenticationExecutionInfoRepresentation) => Promise<any>;
    delExecution: (payload?: {
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    lowerPriorityExecution: (payload?: {
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    raisePriorityExecution: (payload?: {
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    getConfigDescription: (payload?: {
        providerId: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticatorConfigInfoRepresentation>;
    createConfig: (payload?: AuthenticatorConfigRepresentation | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticatorConfigRepresentation>;
    updateConfig: (payload?: AuthenticatorConfigRepresentation | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    getConfig: (payload?: {
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<AuthenticatorConfigRepresentation>;
    delConfig: (payload?: {
        id: string;
    } | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<any>;
    constructor(client: KeycloakAdminClient);
}
