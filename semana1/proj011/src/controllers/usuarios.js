import { uuid } from "uuidv4"
import usuarios from "../usuarios.js"

class Usuarios {

    static index(req, res) {

        const buscaUsuarios = usuarios.map(usuario => ({
            id: usuario.id,
            nome: usuario.nome
        }))
        return res.json(buscaUsuarios)

    }

    static show(req, res) {

        const buscaUsuario = usuarios.find(usuario => usuario.id == req.params.id)

        if (!buscaUsuario) {
            return res.status(404).json({
                "message": "usuario não encontrado"
            })
        }

        return res.json(
            {
                id: buscaUsuario.id,
                nome:buscaUsuario.nome
            }
        )


    }

    static store(req, res) {

        const buscaUsuario = usuarios.find(usuario => usuario.email == req.body.email)


        if (buscaUsuario) {
            return res.json({
                "message": "usuario existente"
            })
        }

        usuarios.push({

            id: uuid(),
            ...req.body
        })

        return res.json({
            "message": "usuario criado com sucesso!"
        })

    }

    static update(req, res) {

        const buscaUsuario = usuarios.findIndex(usuario => usuario.id == req.params.id)        

        if (buscaUsuario == -1) {

            return res.status(404).json({
                "message": "usuario não existe"
            })

        }
        
        const buscaEmail = usuarios.find(usuario => usuario.email == req.body.email)

        if (buscaEmail) {

            return res.status(400).json({
                "message": "email ja existe"
            })
        }

        usuarios[buscaUsuario] = {
            ...usuarios[buscaUsuario],
            email: req.body.email
        }

    
        return res.json({
            "message": "email alterado"
        })

        

    }

    static destroy(req, res) {

        const buscaUsuario = usuarios.findIndex(usuario => usuario.id == req.params.id)

        if (buscaUsuario == -1) {

            return res.status(404).json({ "message": "usuario não existe" })

        }

        usuarios.splice(buscaUsuario, 1)

        return res.json({
            "message": "usuario excluido"
        })
        

    }

    
}

export default Usuarios