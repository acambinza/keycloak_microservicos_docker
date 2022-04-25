export default interface AuthenticatorConfigInfoRepresentation {
    name?: string;
    providerId?: string;
    helpText?: string;
    properties?: ConfigPropertyRepresentation[];
}
export interface ConfigPropertyRepresentation {
    name?: string;
    label?: string;
    helpText?: string;
    type?: string;
    defaultValue?: any;
    options?: string[];
    secret?: boolean;
}
