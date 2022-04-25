export default interface AuthenticatorConfigRepresentation {
    id?: string;
    alias?: string;
    config?: {
        [index: string]: string;
    };
}
export interface AuthenticationProviderRepresentation {
    id?: string;
    displayName?: string;
    description?: string;
}
