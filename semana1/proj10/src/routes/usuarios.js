import { Router } from "express";
import Usuarios from "../controller/usuarios.js";

const route = Router()

route.get("/", Usuarios.listar)

export default route