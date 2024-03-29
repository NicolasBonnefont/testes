import { Request, Response } from "express";
import jwt from "jsonwebtoken"

class LoginController {

    static logar(req: Request, res: Response) {

        try {
            const { email, senha } = req.body

            if (email === "brenovais@brenovais.com" && senha === "brenovais") {
                jwt.sign({ id: "1", nome: "Breno" }, "123456", (err: any, token: any) => {

                    if (err) {
                        return res.status(401).json(err)
                    }

                    return res.json(token)

                })
            } else {
                return res.status(400).json({
                    Mensagem: 'Email ou senha invalidos'
                })
            }

        } catch (error) {
            return res.status(500).json(error)

        }

    }
}

export default LoginController