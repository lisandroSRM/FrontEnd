// ejercicio
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
    },['carrera',2010,12,6]
    ];
    
    const obtener_datos = (dato) => {
        let {nombre,apellido,fecha_nac,puesto,matricula}=dato;
        console.log(`los datos son: ${nombre},${apellido},${fecha_nac},${puesto},${matricula}`);
    }
    let [pers1,pers2,pers3,info]=datos;
    obtener_datos(pers1);
    obtener_datos(pers2);
    obtener_datos(pers3);
    let{texto,year,mes,dia}=info;
    console.log(`los ltimos datos son: ${texto},${year},${mes},${dia},`);