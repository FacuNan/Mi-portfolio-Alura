import { skillsService } from "../../service/skillService.js";
import { login } from "../usuario/usuarioRegtistrado.js";

const estructuraLista = (skill, img, id) => {

    const li = document.createElement('li');
    li.classList.add('skills-li')
    const contenido =
        `<div class="capa"> <div class="btn-edicion">
        <i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
        <a class="icono-edicion btn btn-info"href='http://127.0.0.1:5500/editarSkill.html?id=${id}'><i class='fa fa-pen edit'></i></a>
        </div> <h3>${skill}</h3></div>
        <article class="skills-habilidad">
       
    <img src ="${img}">
   
</article>`

    li.innerHTML = contenido;
    const btn = li.querySelector('.trash');
    const edicion = li.querySelector('.icono-edicion')

    if(login() == true){
        btn.style.display="inherit"
        edicion.style.display="inherit"
      }else{
          btn.style.display="none"
          edicion.style.display="none"
      }

    btn.addEventListener('click', () => {
        const id = btn.id
        skillsService.eliminarSkill(id).then(() => {
            console.log('excelente');
        }).catch((err) => alert(err));
    })


    

    return li

};



const ul = document.querySelector('[data-ul]');

skillsService.listaSkills().then((data) => {
    data.forEach(({ skill, img, id }) => {
        const crearLinea = estructuraLista(skill, img, id);
        ul.appendChild(crearLinea);
    })
}).catch((error) => alert('ocurrio un error'));


