import { serviceInformacion } from "../../service/proyectosService.js";

const traerProyecto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const titulo = document.querySelector('[data-proyecto]')
    const descripcion = document.querySelector('[data-descripcion]');
    const link = document.querySelector('[data-url]');
    const img = document.querySelector('[data-img]');


    serviceInformacion.obtenerProyecto(id).then((perfil) => {
        titulo.value = perfil.titulo
        descripcion.value = perfil.descripcion
        link.value = perfil.url
        img.value = perfil.img
    })
}

traerProyecto()



const editar = document.querySelector('[data-form]')

editar.addEventListener('submit', (evento)=>{
evento.preventDefault();
const url = new URL(window.location);
const id = url.searchParams.get('id');
const titulo = document.querySelector('[data-proyecto]').value
const descripcion = document.querySelector('[data-descripcion]').value
const link = document.querySelector('[data-url]').value
const img = document.querySelector('[data-img]').value


console.log(id, titulo, descripcion, link, img )

serviceInformacion.actualizarInformacion(titulo, descripcion, link, img, id ).then(()=>{
    window.location.href='http://127.0.0.1:5500/index.html'
})
})