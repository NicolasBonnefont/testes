import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express";
import UsuarioTypes from "../@types/UsuarioTypes";
import Usuarios from "../usuarios";


export class UsuariosController {

    static index(req: Request, res: Response) {

        const buscaUsuarios = Usuarios.map((usuario: UsuarioTypes) => ({
            id: usuario.id,
            nome: usuario.nome,
            bio: usuario.bio,
            email: usuario.email
            
        }))
        
        return res.json(buscaUsuarios)
    }

    static show(req: Request, res: Response) {

        const {id} = req.body

        const buscaUsuarios = Usuarios.find((usuario: UsuarioTypes) => usuario.id === id)

        return res.json(buscaUsuarios)
    }

    static store(req: Request, res: Response) {

        const {nome, bio, email, senha} = req.body
       
        const buscaUsuarios = Usuarios.find((usuario: UsuarioTypes) => usuario.email === email)

        if (buscaUsuarios) {
            return res.status(400).json({
                "message": "email ja utilizado"
            })
        }

        Usuarios.push({
            id: uuidv4(),
            nome: nome,
            bio: bio,
            email: email,
            senha: senha
        })
            
        return res.json({
            "message": "usuario criado"})
    }

    static update(req: Request, res: Response) {

        const {nome, bio, email, senha} = req.body


        const buscaUsuarios = Usuarios.findIndex((usuario: UsuarioTypes) => usuario.id === req.params.id)

        if (buscaUsuarios == -1) {
            return res.status(400).json({
                "message": "usuario não exite"
            })
        }

        const buscaEmail = Usuarios.find((usuario: UsuarioTypes) => usuario.email === email)

        if (buscaEmail && buscaEmail.id !== req.params.id) {

            return res.status(400).json({
                "message": "email ja existe"
            })
        }

    
        Usuarios[buscaUsuarios] = {
            id: Usuarios[buscaUsuarios].id,
            nome: nome? nome: Usuarios[buscaUsuarios].nome,
            bio: bio? bio: Usuarios[buscaUsuarios].bio,
            email: email? email: Usuarios[buscaUsuarios].email,
            senha: senha? senha: Usuarios[buscaUsuarios].senha

        }

        return res.json({
            "message": "Email alterado"
        })
    }

    static destroy(req: Request, res: Response) {
        const buscaUsuarios = Usuarios.findIndex(usuario => usuario.id === req.params.id)

        if (buscaUsuarios === -1) {
            return res.status(404).json({
                "message": "Usuario não encontrado"
            })
        }

        Usuarios.splice(buscaUsuarios, 1)

        return res.json({   
            "message": "Usuario deletado"
        })
    }

}

export default UsuariosController