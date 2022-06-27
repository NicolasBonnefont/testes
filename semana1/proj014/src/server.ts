import express from "express"
import { ppid } from "process"
import Routes from "./Routes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => res.json({
    "message": "Homepage"
}))

app.use(Routes)



app.listen(3000, () => console.log("Open, porta 3000"))