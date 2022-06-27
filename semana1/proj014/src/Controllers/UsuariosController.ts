import { Request, Response } from "express";
import UsuarioTypes from "../@types/UsuarioTypes";
import Usuarios from "../usuarios";
import { v4 as uuidv4 } from 'uuid';


class UsuariosController {

    static index(req: Request, res: Response) {

        try {
            const buscaUsuarios = Usuarios.map(usuario => ({
                id: usuario.id,
                nome: usuario.nome,
                bio: usuario.bio,
                email: usuario.email
            }))

            return res.json(buscaUsuarios)
        } catch (error) {
            return res.status(500).json(error)
        }

    }

    static show(req: Request, res: Response) {

        try {
            const buscaUsuarios = Usuarios.find(usuario => usuario.id === req.params.id)

            if (!buscaUsuarios) {
                return res.status(404).json({
                    "message": "usuario não encontrado"
                })
            }

            return res.json({
                id: buscaUsuarios.id,
                nome: buscaUsuarios.nome,
                bio: buscaUsuarios.bio,
                email: buscaUsuarios.email

            })

        } catch (error) {
            return res.status(500).json(error)
        }

    }

    static store(req: Request, res: Response) {

        try {
            const { ...dados }: UsuarioTypes = req.body

            const buscaUsuarios = Usuarios.find(usuario => usuario.email == dados.email)

            if (buscaUsuarios) {
                return res.status(404).json({
                    "message": "email ja utilizado"
                })
            }

            Usuarios.push({
                ...dados,
                id: uuidv4()
            })

            return res.json({
                "message": "Usuario criado"
            })

        } catch (error) {
            return res.status(500).json(error)
        }


    }

    static update(req: Request, res: Response) {

        try {

            const { nome, bio, email, senha } = req.body

            const buscaUsuarios = Usuarios.findIndex(usuario => usuario.id === req.params.id)

            if (buscaUsuarios === -1) {
                return res.status(404).json({
                    "message": "usuario não encontrado"
                })
            }

            const buscaEmail = Usuarios.find(usuario => usuario.email === email && usuario.id !== req.params.id)

            if (buscaEmail) {
                return res.status(400).json({
                    "message": "email existente"
                })
            }

            Usuarios[buscaUsuarios] = {
                id: Usuarios[buscaUsuarios].id,
                nome: nome ? nome : Usuarios[buscaUsuarios].nome,
                bio: bio ? bio : Usuarios[buscaUsuarios].bio,
                email: email ? email : Usuarios[buscaUsuarios].email,
                senha: senha ? senha : Usuarios[buscaUsuarios].senha
            }

            return res.json("usuario alterado")

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static destroy(req: Request, res: Response) {

        try {

            const buscaUsuarios = Usuarios.findIndex(usuario => usuario.id === req.params.id)

            if (buscaUsuarios === -1) {
                return res.status(404).json({
                    "message": "usuario não existe"
                })
            }

            console.log(buscaUsuarios)

            Usuarios.splice(buscaUsuarios, 1)

            return res.json({
                "message": "usuario excluido"
            })

        } catch (error) {
            return res.status(500).json(error)
        }

    }
}

export default UsuariosController
