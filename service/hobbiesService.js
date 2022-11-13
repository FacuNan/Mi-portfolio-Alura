const listaHobbies =()=>{
    return fetch ('http://localhost:3000/hobbies').then((respuesta)=>respuesta.json());
}

const agregarHobbie = (img, hobbie)=>{
return fetch('http://localhost:3000/hobbies', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({img, hobbie, id:uuid.v4()})
}).then((respuesta)=>{
    console.log(respuesta)
})
}

const deleteHobbie =(id)=>{
    return fetch(`http://localhost:3000/hobbies/${id}`,{
        method:'DELETE'
    })
}

const obtenerHobbie =(id)=>{
    return fetch(`http://localhost:3000/hobbies/${id}`).then((respuesta)=> respuesta.json())
}


const actualizarHobbie = (id, img, hobbie)=>{
return fetch(`http://localhost:3000/hobbies/${id}`, {
    method:'PUT',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({id, img, hobbie})
}).then((respuesta) => console.log(respuesta))
}


export const serviceHobbies = {
    listaHobbies,
    agregarHobbie,
    deleteHobbie,
    obtenerHobbie, 
    actualizarHobbie
}