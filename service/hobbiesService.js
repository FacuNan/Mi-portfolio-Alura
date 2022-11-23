const listaHobbies =()=>{
    return fetch ('https://json-server-96pg.onrender.com/hobbies').then((respuesta)=>respuesta.json());
}

const agregarHobbie = (img, hobbie)=>{
return fetch('https://json-server-96pg.onrender.com/hobbies', {
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
    return fetch(`https://json-server-96pg.onrender.com/hobbies/${id}`,{
        method:'DELETE'
    })
}

const obtenerHobbie =(id)=>{
    return fetch(`https://json-server-96pg.onrender.com/hobbies/${id}`).then((respuesta)=> respuesta.json())
}


const actualizarHobbie = (id, img, hobbie)=>{
return fetch(`https://json-server-96pg.onrender.com/hobbies/${id}`, {
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