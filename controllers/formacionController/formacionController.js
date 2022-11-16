import { informacionProyectos } from "../../service/formacionService.js"
import { login } from "../usuario/usuarioRegtistrado.js";

const crearFormacion = (id, img, formacion)=>{

    const formaciones = document.createElement('li');
    
    formaciones.classList.add('formacion__lista__cursos');
    const contenido = `
    <div class="capa"><div class="btn-edicion">
    <i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
    <a class="icono-edicion btn btn-info" href='http://127.0.0.1:5500/Formularios/Edicion/editarFormacion.html?id=${id}'><i class='fa fa-pen edit'></i></a>
    </div><h3>${formacion}</h3></div>
    <div class="formacion__lista__cursos__item">
    
        <img src="${img}" alt=""
            width="100px ">
    </div>
    `
formaciones.innerHTML=contenido

const btn = formaciones.querySelector(".trash")
const edicion= formaciones.querySelector(".icono-edicion")

if(login() == true){
    btn.style.display="inherit"
    edicion.style.display="inherit"
  }else{
      btn.style.display="none"
      edicion.style.display="none"
  }


btn.addEventListener('click', ()=>{
    const id = btn.id
    informacionProyectos.eliminarFormacion(id).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
})
return(formaciones)
}
const listaProyectos = document.querySelector('[data-lista]');
informacionProyectos.listaFormacion().then((data)=>{
    data.forEach(({id, img, formacion})=>{
        const agregar= crearFormacion(id, img, formacion);
        listaProyectos.appendChild(agregar)
        
    })
})




