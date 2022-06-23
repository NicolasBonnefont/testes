import express from "express"
import usuarios from "./usuarios.js"

// Variavel app recebe a function express()
const app = express()

/* middleware, transforma tudo que recebe em json
Obrigatório! Força toda aplicação usar o .json { "exemplo": "exemplo"} */
app.use(express.json())

// Boas vindas // utilizando a function get com o parametro "/" que é 

app.get("/", (req, res) => {
    // no GET, não existe corpo de requisição
    res.json(
        usuarios
    )
})

// Gravar usuario // coloca na rota usuarios.
app.post("/usuarios/", (req, res) => {

    const newUser = req.body

    const pesquisaUsuario = usuarios.find(usuario =>

        String(usuario.nome).toLocaleLowerCase() === String(newUser.nome).toLocaleLowerCase() ||
        usuario.email === newUser.email)

    if (pesquisaUsuario) {

        return res.status(400).json()
    }

    usuarios.push(newUser)


    res.json(usuarios)

})

// Alterar usuario // altera na rota usuarios/:id

app.put("/usuarios/:id", (req, res) => {

    const index = usuarios.findIndex(login => login.id == req.params.id)

    if (index === -1) {

        return res.status(404).send()

    }

    const novoDado = usuarios.filter((user, index) => user.id == req.params.id && (
            usuarios[index] = {
                ...usuarios[index],
                ...req.body
            })

    )

    res.json(usuarios)

})

// Solicitar usuario
app.get("/usuarios/:id", (req, res) => {

    const usuarioId = usuarios.find(usuario => usuario.id == req.params.id)

    // se usuarioId for undefined
    if (!usuarioId) {

        return res.status(400).send()
    }

    res.json(usuarioId)
})

// Deletar usuario
app.delete("/usuarios/:id", (req, res) => {

    const userID = usuarios.findIndex(usuario => usuario.id == req.params.id)

    if (userID === -1) {
        // 404 = not found
        return res.status(404).send()
    }
    
    usuarios.splice(userID, 1)

    res.json(usuarios).send
})


// Ouvindo a porta 3000
app.listen(3000, () => {
    console.log("Server Open")
})