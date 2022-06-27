import { Router } from "express";
import Usuarios from "../controllers/usuarios.js";

const routes = Router()

routes.get("/usuarios/", Usuarios.index)

routes.get("/usuarios/:id", Usuarios.show)

routes.post("/usuarios/", Usuarios.store)

routes.put("/usuarios/perfil/:id", Usuarios.update)

routes.delete("/usuarios/:id", Usuarios.destroy)

export default routes
