import { serviceUsuario } from "../../service/usuario.js"



const botones = document.querySelectorAll('[data-agregar]')
var logeado = ''

export const login = () => {
    serviceUsuario.verificarUsuario().then((usuarios) => {
        usuarios.forEach(({ registro }) => {
            logeado = registro

        })


    })

    return logeado

}



login()





