import express from "express"
import route from "./routes/usuarios.js"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.json({
        "message": "Hello World"
    })
})

app.use(route)

app.listen(3000, console.log("Servidor iniciado na porta 3000"))
