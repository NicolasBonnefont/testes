import express from "express"
import usuarios from "./usuarios.js"

const app = express()

app.use(express.json())


app.get("/", (req, res) => {

    res.json({
        "message": "Cheguei aqui!"
    })
})

app.get("/usuarios", (req, res) => {

    const perfil = usuarios.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
    }))

    res.json(perfil)
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
        email: userId.email
    })

    console.log(userId)
})

app.put("/usuarios/perfil/:id", (req, res) => {

    const userId = usuarios.findIndex(usuario => usuario.id == req.params.id)

    if (userId === -1)

        return res.status(404).json({
            "message": "usuario não encontrado!"
        })

    usuarios[userId] = {
        ...usuarios[userId],
        email: req.body.email
    }

    res.status(200).send({
            "message": "email alterado!"
        }
    )

    console.log(usuarios[userId])

})

app.post("/usuarios", (req, res) => {
    const newUser = usuarios.find(usuario => usuario.email == req.body.email)

    if (newUser) {

        return res.status(400).json({
            "message": "usuario ja existe"
        })
    }

    usuarios.push(req.body)

    res.status(200).json({
        "message": "usuario registrado"
    }).send()
    
    console.log(usuarios)
})

app.delete("/usuarios/:id", (req, res) => {
    const deletUser = usuarios.findIndex(usuario => usuario.id == req.params.id)

    if (deletUser == -1) {

        return res.status(400).json({
            "message": "usuario não existe!"
        })
    }

    usuarios.splice(deletUser, 1)
    res.status(200).json({
        "message": "usuario deletado"
    })
    console.log(usuarios)
})





app.listen(3000)