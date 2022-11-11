import { informacionProyectos } from "../../service/formacionService.js";

const btnAgregar = document.querySelector('[data-form');

btnAgregar.addEventListener('submit', ()=>{
const formacion = document.querySelector('[data-formacion]').value
const img = document.querySelector('[data-img]').value

informacionProyectos.crearFormacion(formacion, img).then(()=>{
    window.location.href = 'http://127.0.0.1:5500/index.html'
})
})