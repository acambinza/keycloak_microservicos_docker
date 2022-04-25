import { ResourceOwnerRepresentation } from './resourceServerRepresentation';
import ScopeRepresentation from './scopeRepresentation';
export default interface ResourceRepresentation {
    name?: string;
    type?: string;
    owner?: ResourceOwnerRepresentation;
    ownerManagedAccess?: boolean;
    displayName?: string;
    attributes?: {
        [index: string]: string[];
    };
    _id?: string;
    uris?: string[];
    scopes?: ScopeRepresentation[];
    icon_uri?: string;
}
