import express from "express"
import routes from "./routes/usuarios.js"

const app = express()

app.use(express.json())



app.use(routes)

app.get("/", (req, res) => res.json({"message": "você chegou aqui!"}))

app.listen(3000, console.log("Servidor aberto na porta 3000"))

// po
