// function mensaje (_nombre,  edad){
//     if(edad>17){
//         return ' hola ${nombre} eres mayor de edad'
//     }else{
//         return ' hola ${nombre} eres menor de edad'
//     }
// }
// const saludo = mensaje ("lisandro", 21);
// console. log(saludo);

const suma =(numero1=0,numero2=0)=> {
    return `la suma es (${numero1 + numero2})`;
}
const resta =(numero1=0,numero2=0)=>{
    return `la resta es ${numero1 - numero2}`;
}
const multi =(numero1=0,numero2=0)=> {
    return `la multiplicacion es ${numero1 * numero2}`;
}
const div =(numero1=0,numero2=0)=> {
    return `la divivion es ${numero1 / numero2}`;
}
const operacion =multi (6,2)
console.log (operacion);