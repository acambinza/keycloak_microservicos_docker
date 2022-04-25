import PolicyRepresentation, { DecisionEffect } from './policyRepresentation';
export default interface PolicyResultRepresentation {
    policy?: PolicyRepresentation;
    status?: DecisionEffect;
    associatedPolicies?: PolicyResultRepresentation[];
    scopes?: string[];
}
