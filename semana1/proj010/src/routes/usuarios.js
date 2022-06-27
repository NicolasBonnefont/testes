import { Router } from "express";
import Usuarios from "../controller/usuarios.js";

const route = Router()

route.get("/usuarios", Usuarios.index)

route.post("/usuarios", Usuarios.store)

route.get("/usuarios/:id", Usuarios.show)

route.put("/usuarios/perfil/:id", Usuarios.update)

route.delete("/usuarios/:id", Usuarios.destroy)

export default route