import { informacionProyectos } from "../../service/formacionService.js"
const obtenerFormacion = () => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    const formacion = document.querySelector('[data-formacion]')
    const img = document.querySelector('[data-img]')


    informacionProyectos.detallesFormacion(id).then((perfil) => {
        formacion.value = perfil.formacion
        img.value = perfil.img
    })
}

obtenerFormacion()

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (evento)=>{
evento.preventDefault();
const url = new URL(window.location)
const id = url.searchParams.get('id')
const formacion = document.querySelector('[data-formacion]').value
const img = document.querySelector('[data-img]').value

informacionProyectos.actualizarFormacion(formacion, img, id).then(()=>
window.location.href = 'http://127.0.0.1:5500/index.html')
})