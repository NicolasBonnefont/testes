import usuarios from "../usuarios.js"
import { v4 as uuidv4 } from 'uuid'

class Usuarios {

    static index(req, res) { 

        const usuariosNome = usuarios.map(usuario => ({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }))

        res.json(usuariosNome)
    }

    static store(req, res) {
        const buscaUsuario = usuarios.find(usuario => usuario.email == req.params.id)

        if (buscaUsuario) {
            return res.status(400).json({
                "message": "usuario existente"
            })
        }

        usuarios.push({
            id: uuidv4(),
            ...req.body
        })

        return res.json({
            "message": "usuario criado"
        })
        
    }

    static show(req, res) {
        const buscaUsuario = usuarios.find(usuario => usuario.id == req.params.id)

        console.log(buscaUsuario)
        if (!buscaUsuario) {
            return res.status(404).json({
                "message": "usuario não encontrado"
            })
        }

        return res.json({
            id: buscaUsuario.id,
            nome: buscaUsuario.nome
        })
    }

    static update(req, res) {

        const buscaUsuario = usuarios.findIndex(usuario => usuario.id == req.params.id)
        console.log(buscaUsuario)
        if (buscaUsuario == -1) {
            return res.status(404).json({
                "message": "usuario não encontrado"
            })
        }
    
        usuarios[buscaUsuario] = {
            ...usuarios[buscaUsuario],
            ...req.body
        }

        return res.json({
            "message": "usuario alterado com sucesso"
        })
    }

    static destroy(req, res) {

        const buscaUsuario = usuarios.findIndex(usuario => usuario.id == req.params.id)

        if (buscaUsuario == -1) {
            return res.status(404).json({
                "message": "usuario não encontrado"
            })
        }
        
        usuarios.splice(buscaUsuario, 1)

        return res.json({
            "message": "usuario deletado"
        })
    }

}

export default Usuarios