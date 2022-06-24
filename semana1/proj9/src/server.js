import { v4 as uuidv4 } from 'uuid';
import express from "express"
import usuarios from "./usuarios.js"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        "message": "Hello world!"
    }).send()
})

app.get("/usuarios", (req, res) => {

    const perfis = usuarios.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
    }))

    res.json(perfis)


})

app.get("/usuarios/:id", (req, res) => {
    const userId = usuarios.find(usuario => usuario.id == req.params.id)

    if (!userId) {

        return res.status(404).json({
            "message": "usuario não encontrado"
        })
    }

    res.json({
        nome: userId.nome,
        bio: userId.bio
    })
})

app.post("/usuarios", (req, res) => {

    const buscaUsuario = usuarios.find(usuario => usuario.email == req.body.email)

    if (buscaUsuario) {
        return res.status(400).json()
    }

    usuarios.push({
        id: uuidv4(),
        ...req.body

    })

    res.status(201).send()




})

app.put("/usuarios/perfil/:id", (req, res) => {

    const buscaIndex = usuarios.findIndex(usuario => usuario.id == req.params.id)

    if (buscaIndex == -1) {
        return res.status(404).json({
            "message": "id não encontrado!"
        })
    }

    console.log(req.body)

    usuarios[buscaIndex] = {
        ...usuarios[buscaIndex],
        ...req.body
    }

    res.status(200).send()
})

app.delete("/usuarios/:id", (req, res) => {
    const buscaIndex = usuarios.findIndex(usuario => usuario.id == req.params.id)

    if (buscaIndex == -1) {
        return res.status(404).json({
            "message": "usuario não encontrado"
        })
    }

    usuarios.splice(buscaIndex, 1)

    res.status(200).send()

    console.log(usuarios)
})
app.listen(3000)






