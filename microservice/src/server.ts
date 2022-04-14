import express from 'express';
import routes from './routes';

import {keycloak, memoryStore} from './keycloak';
import session from 'express-session';

const app = express()


app.use(
    session({
        secret: '1234567890',
        resave: false,
        saveUninitialized: true,
        store: memoryStore,
        cookie: {
            maxAge: 1000 * 60 * 10
        }
    })
)


app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
}))


app.use(express.json())


app.use(routes) 


const PORT = process.env.PORT || 5000 


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})


