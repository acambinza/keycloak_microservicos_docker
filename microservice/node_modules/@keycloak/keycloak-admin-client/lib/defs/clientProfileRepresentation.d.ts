import ClientPolicyExecutorRepresentation from './clientPolicyExecutorRepresentation';
export default interface ClientProfileRepresentation {
    description?: string;
    executors?: ClientPolicyExecutorRepresentation[];
    name?: string;
}
