import KeycloakConnect from 'keycloak-connect';

import session from 'express-session';

//@ts-ignore
KeycloakConnect.prototype.accessDenied = (req, res) => {
    res.json({message: "Não autorizado"})
}

const memoryStore = new session.MemoryStore();

const config : KeycloakConnect.KeycloakConfig = {
    realm: 'Cetim-Auth',
    "auth-server-url":"http://localhost:8090/auth",
    resource: 'colab-auth'  ,
    "confidential-port":0,
    "ssl-required":"external"
}

const keycloak = new KeycloakConnect({store:memoryStore}, config);

export  { keycloak, memoryStore};