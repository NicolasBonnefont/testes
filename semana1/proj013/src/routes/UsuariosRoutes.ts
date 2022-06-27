import { Request, Response, Router } from "express";
import UsuariosController from "../controllers/UsuariosController";


export const Routes = Router()

Routes.get("/usuarios", UsuariosController.index)

Routes.get("/usuarios/:id", UsuariosController.show)

Routes.post("/usuarios", UsuariosController.store)

Routes.put("/usuarios/perfil/:id", UsuariosController.update)

Routes.delete("/usuarios/perfil/:id", UsuariosController.destroy)

export default Routes