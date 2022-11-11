import { skillsService } from "../../service/skillService.js";


const agregar = document.querySelector('[data-form]');

agregar.addEventListener('submit', () => {
    const img = document.querySelector('[data-email]').value;
    const skill = document.querySelector('[data-password]').value;

    skillsService.crearSkill(skill, img).then(() => {
        window.location.href = "./index.html"
    }).catch(err => console.log(err))

});