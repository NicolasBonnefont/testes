import express from "express"
import route from "./routes/usuarios.js"

const app = express()

app.use(express.json())

app.use(route)

app.listen(3000, console.log("Servidor iniciado na prota 3000"))