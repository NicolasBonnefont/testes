import usuarios from "../usuarios.js"

class Usuarios {
    static listar(req, res) { 
        return res.json(usuarios)
    }
}

export default Usuarios