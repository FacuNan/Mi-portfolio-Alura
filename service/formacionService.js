const listaFormacion =()=>{
    return fetch(' http://localhost:3000/formacion').then((respuesta)=> respuesta.json())
}

const crearFormacion = (formacion, img )=>{
    return fetch((' http://localhost:3000/formacion'),{
        method:'POST',
        headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify({formacion, img, id:uuid.v4()})
    })
}

const eliminarFormacion = (id)=>{

    return fetch(`http://localhost:3000/formacion/${id}`, {
        method:'DELETE'
    }
    )
}

const detallesFormacion = (id) =>{
    return fetch(`http://localhost:3000/formacion/${id}`).then((respuesta)=> respuesta.json());
}

const actualizarFormacion=(formacion, img, id)=>{
return fetch(`http://localhost:3000/formacion/${id}`, {
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({formacion,img,id})
}).then((respuesta)=> respuesta.json())
}

export const informacionProyectos ={
    listaFormacion,
    crearFormacion,
    eliminarFormacion,
    detallesFormacion,
    actualizarFormacion
}