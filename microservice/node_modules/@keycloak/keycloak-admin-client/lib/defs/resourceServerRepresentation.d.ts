import PolicyRepresentation from './policyRepresentation';
import ResourceRepresentation from './resourceRepresentation';
import ScopeRepresentation from './scopeRepresentation';
export default interface ResourceServerRepresentation {
    id?: string;
    clientId?: string;
    name?: string;
    allowRemoteResourceManagement?: boolean;
    policyEnforcementMode?: PolicyEnforcementMode;
    resources?: ResourceRepresentation[];
    policies?: PolicyRepresentation[];
    scopes?: ScopeRepresentation[];
    decisionStrategy?: DecisionStrategy;
}
export interface ResourceOwnerRepresentation {
    id?: string;
    name?: string;
}
export interface AbstractPolicyRepresentation {
    id?: string;
    name?: string;
    description?: string;
    type?: string;
    policies?: string[];
    resources?: string[];
    scopes?: string[];
    logic?: Logic;
    decisionStrategy?: DecisionStrategy;
    owner?: string;
    resourcesData?: ResourceRepresentation[];
    scopesData?: ScopeRepresentation[];
}
export declare type PolicyEnforcementMode = 'ENFORCING' | 'PERMISSIVE' | 'DISABLED';
export declare type DecisionStrategy = 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS';
export declare type Logic = 'POSITIVE' | 'NEGATIVE';
export declare type Category = 'INTERNAL' | 'ACCESS' | 'ID' | 'ADMIN' | 'USERINFO';
