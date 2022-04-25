import KeycloakConnect from 'keycloak-connect';

import session from 'express-session';

//@ts-ignore
KeycloakConnect.prototype.accessDenied = (req, res) => {
    res.json({message: "Não autorizado"})
}

const memoryStore = new session.MemoryStore();

const config : KeycloakConnect.KeycloakConfig = {
    realm: 'CETIM-AUTH',
    "auth-server-url":"http://localhost:8000/auth",
    resource: 'colab-v2',
    "confidential-port":0,
    "ssl-required":"external"
}

const keycloak = new KeycloakConnect({store:memoryStore}, config);

export  { keycloak, memoryStore};