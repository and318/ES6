let personaje = {nombre: "Rick Sanchez", especie: "Humano", status: "Vivo"};



export default function resulTwo(){
    return JSON.stringify(personaje);
}
console.log(personaje); //return Object
console.log(resulTwo(personaje)); //object Json