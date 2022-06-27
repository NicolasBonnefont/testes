import express from "express" 
import Routes from "./routes/UsuariosRoutes"

const app = express()

app.use(express.json())


app.use(Routes)


app.listen(3000, () => console.log("Servidor iniciado na porta 3000"))