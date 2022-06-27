import { Request, Response } from "express"

export class UsuariosController {

    static index(req: Request, res: Response) {
        return res.json({
            "message": "cheguei aqui, index"
        })
    }

    static show(req: Request, res: Response) {
        return res.json({
            "message": "cheguei aqui, show"
        })
    }

    static store(req: Request, res: Response) {
        return res.json({
            "message": "cheguei aqui, store"
        })
    }

    static update(req: Request, res: Response) {
        return res.json({
            "message": "cheguei aqui, update"
        })
    }

    static destroy(req: Request, res:Response) {
        return res.json({
            "message": "cheguei aqui, destroy"
        })
    }
}

export default UsuariosController