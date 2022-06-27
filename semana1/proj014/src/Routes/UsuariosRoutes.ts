import { Router } from "express";
import UsuariosController from "../Controllers/UsuariosController";
import autenticacao from "../middlewares/auth";
import Usuarios from "../usuarios";

export const UsuarioRoutes = Router()

UsuarioRoutes.use(autenticacao)

UsuarioRoutes.get("/usuarios", UsuariosController.index)

UsuarioRoutes.get("/usuarios/:id", UsuariosController.show)

UsuarioRoutes.post("/usuarios", UsuariosController.store)

UsuarioRoutes.put("/usuarios/perfil/:id", UsuariosController.update)

UsuarioRoutes.delete("/usuarios/perfil/:id", UsuariosController.destroy)

export default UsuarioRoutes