import Resource from './resource';
import { KeycloakAdminClient } from '../client';
import ClientProfilesRepresentation from '../defs/clientProfilesRepresentation';
import ClientPoliciesRepresentation from '../defs/clientPoliciesRepresentation';
export declare class ClientPolicies extends Resource<{
    realm?: string;
}> {
    constructor(client: KeycloakAdminClient);
    listProfiles: (payload?: ({
        includeGlobalProfiles?: boolean | undefined;
    } & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientProfilesRepresentation>;
    createProfiles: (payload?: (ClientProfilesRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
    listPolicies: (payload?: (void & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ClientPoliciesRepresentation>;
    updatePolicy: (payload?: (ClientPoliciesRepresentation & {
        realm?: string | undefined;
    }) | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<void>;
}
