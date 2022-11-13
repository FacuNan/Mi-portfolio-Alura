import { serviceInformacion } from "../../service/proyectosService.js";

const agregar = document.querySelector('[data-form]');

agregar.addEventListener('submit', ()=>{
    const titulo= document.querySelector('[data-proyecto]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    const url = document.querySelector('[data-url]').value
    const img = document.querySelector('[data-img]').value

    serviceInformacion.crearProyectos(titulo, descripcion, url, img).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
  
})