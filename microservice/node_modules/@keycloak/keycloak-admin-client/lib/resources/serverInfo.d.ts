import Resource from './resource';
import { ServerInfoRepresentation } from '../defs/serverInfoRepesentation';
import KeycloakAdminClient from '..';
export declare class ServerInfo extends Resource {
    constructor(client: KeycloakAdminClient);
    find: (payload?: {} | undefined, options?: Pick<import("./agent").RequestArgs, "catchNotFound"> | undefined) => Promise<ServerInfoRepresentation>;
}
