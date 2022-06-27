import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

function autenticacao(req: Request, res: Response, next: NextFunction) {

    const jwt_request = req.headers["authorization"]

    if (!jwt_request) {
        return res.status(401).json({
            "message": "token invalido 1"
        })
    }

    jwt.verify((jwt_request).split(' ')[1], "123456", (err) => {

        if (err) {
            return res.status(401).json({
                "message": "token invalido 2"
            })
        }

        return next()
    })

}

export default autenticacao