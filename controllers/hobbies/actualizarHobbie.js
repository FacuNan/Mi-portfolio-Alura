import { serviceHobbies } from "../../service/hobbiesService.js"

const traerHobbie = () => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    const img = document.querySelector('[data-hobbie-img]')
    const hobbies = document.querySelector('[data-hobbie]')
    serviceHobbies.obtenerHobbie(id).then((hobbie) => {
        img.value = hobbie.img
        hobbies.value = hobbie.hobbie

    })
}

traerHobbie()

const editar = document.querySelector('[data-form]')

editar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    const img = document.querySelector('[data-hobbie-img]').value
    const hobbies = document.querySelector('[data-hobbie]').value

    serviceHobbies.actualizarHobbie(id, img, hobbies).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })

})

