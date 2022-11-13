import { serviceHobbies } from "../../service/hobbiesService.js"

const agregarLinea = (id, img, hobbie) => {
    const tarjeta = document.createElement('li')
    tarjeta.classList.add('hobbies__contenido-items')
    const contenido = `<i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
    <a href='http://127.0.0.1:5500/Formularios/Edicion/editarHobbie.html?id=${id}'><i class='fa fa-pen'></i></a>
    <img src="${img}" alt="">
    <h3>${hobbie}</h3>`

    tarjeta.innerHTML = contenido

    const elimina = tarjeta.querySelector('.trash')
    

  elimina.addEventListener('click', ()=>{
    const identificador = elimina.id
    serviceHobbies.deleteHobbie(identificador).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
  })

    return tarjeta



}


const listaHobbies = document.querySelector('[data-hobbies-lista]')
console.log(listaHobbies)

serviceHobbies.listaHobbies().then((data) => {
    data.forEach(({ id, img, hobbie }) => {
        const hobbies = agregarLinea(id, img, hobbie)
        listaHobbies.appendChild(hobbies)

    })
})


