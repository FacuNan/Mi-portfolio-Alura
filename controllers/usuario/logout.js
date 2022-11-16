import { serviceUsuario } from "../../service/usuario.js";
import { login } from "./usuarioRegtistrado.js";

const cerrarSesion = document.querySelector('.btn-outline-danger');

cerrarSesion.addEventListener('click', () => {
    serviceUsuario.verificarUsuario().then((usuario) => {
        usuario.forEach(({ id, email, username, password, confirmarPassword, registro }) => {
            registro = false
            serviceUsuario.usuarioRegistrado(id, email, username, password, confirmarPassword, registro).then(() => {
                window.location.href = 'http://127.0.0.1:5500/index.html'
            })
        })
    }
    )
})




