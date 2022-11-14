import { serviceUsuario } from "../../service/usuario.js";

const formulario = document.querySelector('[data-login]')




formulario.addEventListener('click', () => {
    const correo = document.querySelector('[data-email').value;
    const contrasenia = document.querySelector('[data-password]').value;


    serviceUsuario.verificarUsuario().then((usuarios) => {

        usuarios.forEach(({ id, email, username, password, confirmarPassword, registro }) => {
            if (correo == email && contrasenia == password) {
                registro=true
                serviceUsuario.usuarioRegistrado(id, email, username, password, confirmarPassword, registro).then(()=>{
                   window.location.href = 'http://127.0.0.1:5500'
                })

            }else{
                registro =false
            }
        })
    });
})




