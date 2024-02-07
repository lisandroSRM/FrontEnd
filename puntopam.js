const datos=[
    {
        nombre:"jose",
        apellido:"avila",
        fecha_nac:"10/05/2000",
        puesto:"siatemas",
        matricula:1216151
    },
    {
        nombre:"ana",
        apellido:"perez",
        fecha_nac:"30/02/2001",
        puesto:"gestiion",
        matricula:1216132
    },
    {
        nombre:"julio",
        apellido:"lopez",
        fecha_nac:"11/08/2002",
        puesto:"contador",
        matricula:1216123
    },
    ['carrera',2010,12,6]
    ];
    
    datos.map((persona) => {
        if (typeof persona === 'object' && ¡Array ) {
                            
        }
        let{nombre, apellido, fecha_nacimineto, puesto, matricula} = persona
        console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimineto}, ${puesto}, ${matricula}`);
    });