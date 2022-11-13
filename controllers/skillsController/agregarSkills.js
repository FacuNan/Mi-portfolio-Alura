import { skillsService } from "../../service/skillService.js";


const agregar = document.querySelector('[data-form]');

agregar.addEventListener('submit', () => {

    const img = document.querySelector('[data-img]').value;
    const skill = document.querySelector('[data-skill]').value;

    skillsService.crearSkill(skill, img).then(() => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    }).catch(err => console.log(err))

});