

const listaSkills = () => {
 return fetch('https://json-server-96pg.onrender.com/skills').then((respuesta)=> 
 respuesta.json()
 );
};

const crearSkill = (skill, img) =>{
return fetch('https://json-server-96pg.onrender.com/skills',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },

    body: JSON.stringify({skill, img, id: uuid.v4()
    })


})
}

const eliminarSkill = (id) =>{
    return fetch(`https://json-server-96pg.onrender.com/skills/${id}`,{
        method:'DELETE'
});
}

const detallesClientes=(id)=>{
    return fetch(`https://json-server-96pg.onrender.com/skills/${id}`
).then((respuesta) => respuesta.json()
);
}

const actualizarSkill=(skill, img, id)=>{
    return fetch(`https://json-server-96pg.onrender.com/skills/${id}`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({skill, img, id})
    }).then((respuesta)=> console.log(respuesta));
}

export const skillsService = {
    listaSkills, 
    crearSkill,
    eliminarSkill,
    detallesClientes,
    actualizarSkill
}



