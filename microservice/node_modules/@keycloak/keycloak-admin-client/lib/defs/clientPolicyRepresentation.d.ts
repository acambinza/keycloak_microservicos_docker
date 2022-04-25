import ClientPolicyConditionRepresentation from './clientPolicyConditionRepresentation';
export default interface ClientPolicyRepresentation {
    conditions?: ClientPolicyConditionRepresentation[];
    description?: string;
    enabled?: boolean;
    name?: string;
    profiles?: string[];
}
