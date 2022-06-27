import { Router } from "express";
import LoginRoutes from "./LoginRoutes";
import UsuarioRoutes from "./UsuariosRoutes";

const Routes = Router()

Routes.use(LoginRoutes)

Routes.use(UsuarioRoutes)

export default Routes