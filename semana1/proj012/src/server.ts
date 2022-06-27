import express from "express"
import routes from "./routes/UsuariosRoutes"

const app = express()

app.use(express.json())

app.get("/",)

app.use(routes)

app.listen(3000, () => console.log("Aberto na porta 3000"))