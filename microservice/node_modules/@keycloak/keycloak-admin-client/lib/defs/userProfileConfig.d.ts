export default interface UserProfileConfig {
    attributes?: UserProfileAttribute[];
    groups?: UserProfileGroup[];
}
export interface UserProfileAttribute {
    name?: string;
    validations?: Record<string, unknown>[];
    annotations?: Record<string, unknown>[];
    required?: UserProfileAttributeRequired;
    permissions?: UserProfileAttributePermissions;
    selector?: UserProfileAttributeSelector;
    displayName?: string;
    group?: string;
}
export interface UserProfileAttributeRequired {
    roles?: string[];
    scopes?: string[];
}
export interface UserProfileAttributePermissions {
    view?: string[];
    edit?: string[];
}
export interface UserProfileAttributeSelector {
    scopes?: string[];
}
export interface UserProfileGroup {
    name?: string;
    displayHeader?: string;
    displayDescription?: string;
    annotations?: Record<string, unknown>;
}
