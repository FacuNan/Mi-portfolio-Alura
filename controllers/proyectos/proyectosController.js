import { serviceInformacion } from "../../service/proyectosService.js";
import { login } from "../usuario/usuarioRegtistrado.js";

const traerProyecto = (titulo, descripcion, url, img, id) => {

    const article = document.createElement('article');
    article.classList.add('proyectos__informacion')

    const contenido = `

    <div class="proyectos__imagen">
    <i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
    <a href='http://127.0.0.1:5500/Formularios/Edicion/editarProyecto.html?id=${id}'><i class='fa fa-pen'></i></a>
        <img src="${img}"
            alt="">
    </div>
    <div class="proyectos__descripcion">
        <h1>${titulo}</h1>
        <p>${descripcion}</p>
    </div>`

    article.innerHTML = contenido

    const eliminar = article.querySelector('.trash')
    const edicion = article.querySelector('.fa-pen')

    if(login() == true){
        eliminar.style.display="inherit"
        eliminar.style.display="inherit"
      }else{
          eliminar.style.display="none"
          edicion.style.display="none"
      }
   
    eliminar.addEventListener('click', ()=>{

    const id= eliminar.id
        serviceInformacion.eliminarProyecto(id).then(()=>{
            window.location.href = 'http://127.0.0.1:5500/index.html'
        })
    })

    
   
    return article

}

const proyecto = document.querySelector('[data-proyectos]')

serviceInformacion.listaProyectos().then((data)=>{
    data.forEach(({titulo, descripcion, url, img, id})=>{
        const nuevaLinea = traerProyecto(titulo, descripcion, url, img, id)

        proyecto.appendChild(nuevaLinea)
    })
});

