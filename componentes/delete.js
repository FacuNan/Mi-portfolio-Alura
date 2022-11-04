const deleteIcon = ('click', () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon', 'trash');
    i.addEventListener('click', eliminarContenido);
    return i
});

const eliminarContenido = (event) =>{
const parent = event.target.parentElement;
parent.remove();
console.log(event)
}

export default deleteIcon;