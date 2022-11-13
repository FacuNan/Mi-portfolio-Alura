import { serviceHobbies } from "../../service/hobbiesService.js";

const agregar = document.querySelector('[data-form');

agregar.addEventListener('submit', ()=>{
    const img = document.querySelector('[data-hobbie-img]').value;
    const hobbie = document.querySelector('[data-hobbie]').value;
    serviceHobbies.agregarHobbie(img, hobbie).then(()=>{
        window.location.href = "./index.html"
    })

})