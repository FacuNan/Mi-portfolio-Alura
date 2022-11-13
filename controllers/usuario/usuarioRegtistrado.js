import { serviceUsuario } from "../../service/usuario.js"

const botones = document.querySelectorAll('[data-agregar]')
console.log(botones)

const login = () => {

    serviceUsuario.verificarUsuario().then((data)=>{
        data.forEach(({registro})=>{
            if(registro== true){
                botones.forEach((boton)=>{
                   boton.style.display='inherit'
                })
            }
        })
    })
}


login()