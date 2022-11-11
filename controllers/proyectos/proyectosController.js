import { serviceInformacion } from "../../service/proyectosService.js";

const traerProyecto = (titulo, descripcion, url, img, id) => {

    const article = document.createElement('article');
    article.classList.add('proyectos__informacion')

    const contenido = `

    <div class="proyectos__imagen">
        <img src="${img}"
            alt="">
    </div>
    <div class="proyectos__descripcion">
        <h1>${titulo}</h1>
        <p>${descripcion}</p>
    </div>`

    article.innerHTML = contenido
   
    return article

}

console.log(traerProyecto())
const proyecto = document.querySelector('[data-proyectos]')

serviceInformacion.listaProyectos().then((data)=>{
    data.forEach(({titulo, descripcion, url, img, id})=>{
        const nuevaLinea = traerProyecto(titulo, descripcion, url, img, id)

        proyecto.appendChild(nuevaLinea)
    })
});

