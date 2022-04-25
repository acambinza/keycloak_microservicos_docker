import ClientProfileRepresentation from './clientProfileRepresentation';
export default interface ClientProfilesRepresentation {
    globalProfiles?: ClientProfileRepresentation[];
    profiles?: ClientProfileRepresentation[];
}
