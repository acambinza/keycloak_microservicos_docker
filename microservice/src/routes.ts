import {Router, Request, Response, NextFunction} from 'express'

import {keycloak} from './keycloak'

const routes = Router()

routes.get('/', keycloak.protect(), (req: Request, res: Response, next: NextFunction) =>{
    //@ts-ignore
    console.log(req.kauth.grant.access_token)

    //@ts-ignore
    console.log('user_logado', req.kauth.grant.id_token.content)
    
    //@ts-ignore
    res.json({"user-logado": req.kauth.grant.id_token.content})
})


// role do reino - "realm:rh"

//realm:gerente - a routa so fica disponivel pra role rh 
routes.get('/reino', keycloak.protect("realm:rh"), (req: Request, res: Response, next: NextFunction) => {
    res.json("reino")
})

// role do client - "colab-auth:rh"
routes.get('/cliente', keycloak.protect("colab-auth:admin"), (req: Request, res: Response, next: NextFunction) => {   
    res.json("client")
})



export default routes