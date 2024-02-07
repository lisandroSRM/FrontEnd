// peticiones al servidor para utilizar apis
//       url     ,         objeto
fetch(`local.php`)
.then(respuesta=> respuesta.json()
    ).then((respuesta)=>{
        let[estado, msj ]=respuesta;
        if(estado==1){
            console.log(msj)
        }else{
            console.error("se produjo un error");
        }
    }).catch((error)=>{
        console.log(error);
    });