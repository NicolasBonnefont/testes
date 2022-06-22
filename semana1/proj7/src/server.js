import express from "express"

// Variavel app recebe a function express()
const app = express()

//middleware, transforma tudo que recebe em json
app.use(express.json())

const usuarios = [{
        id: 1,
        nome: "breno",
        sobrenome: "novais",
        email: "brenovais@gmail.com"
    },

    {
        id: 2,
        nome: "bruno",
        sobrenome: "vinicius",
        email: "bruvais@gmail.com"
    },

    {
        id: 3,
        nome: "Nioox",
        sobrenome: "serge",
        email: "brenovais@gmail.com"
    }
]

// utilizando a function get com o parametro "/" que é 
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})

// pega na rota usuarios.
app.get("/usuarios", (req, res) => {


    res.json(usuarios)
})

app.get("/usuarios/:id", (req, res) => {

    let usuario = usuarios.find(usuario => usuario.id == req.params.id)

    if (!usuario) {

        return res.json({
            "message": "Usuario não encontrado!"
        })
    }

    res.json(usuario)

})

// coloca na rota usuarios.
app.post("/usuarios", (req, res) => {

    const goku = req.body

    console.log(goku)

    res.json({
        message: "Usuario salvo com sucesso!"
    })
})

// altera na rota usuarios

// :id e o parametro da rota, retornado qndo chamado o params
app.put("/usuarios/:id", (req, res) => {

    const userID = req.params.id
    const dadosUsuario = req.body

    const index = usuarios.findIndex(user => user.id == userID)

    if (index === -1) {

        return res.json({
            message: "Usuario não encontrado"
        })
    }
    usuarios[index] = {
        ...usuarios[index],
        ...dadosUsuario
    }

    res.json({
        usuarios,
        message: "Usuario alterado com sucesso!"
    })
})


// Ouvindo a porta 3000
app.listen(3000, () => {
    console.log(`Servidor aberto na porta ${3000}`)
})
