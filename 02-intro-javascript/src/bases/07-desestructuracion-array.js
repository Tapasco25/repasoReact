const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;
console.log(p3)

const retornaArrglo = () =>{
    return['ABC', 123];
}

const [letras, numeros] = retornaArrglo();
console.log(letras, numeros)

// tarea
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}
const [nombre, setNombre] = useState ('Goku')
console.log(nombre)
setNombre();
