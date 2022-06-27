import { Router } from "express";
import Usuarios from "../controllers/UsuariosController";

const UsuariosRoutes = Router()

UsuariosRoutes.get("/usuarios", Usuarios.index)

UsuariosRoutes.get("/usuarios/:id", Usuarios.show)

UsuariosRoutes.post("/usuarios", Usuarios.store)

UsuariosRoutes.put("/usuarios/perfil/:id", Usuarios.update)

UsuariosRoutes.delete("/usuarios/:id", Usuarios.destroy)


export default UsuariosRoutes