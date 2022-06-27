import { Router } from "express";
import LoginController from "../Controllers/LoginController"

const LoginRoutes = Router()

LoginRoutes.post("/logar", LoginController.logar)

export default LoginRoutes