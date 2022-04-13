import {Router, Request, Response, NextFunction} from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) =>{
    res.send("raiz da APP")
})


export default routes