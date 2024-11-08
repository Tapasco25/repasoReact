const saludar1 = (nombre) => {
    return `hola, ${nombre}`
}

const saludar2 = (nombre) => `hola, ${nombre}`

const saludar3 = () => `hola mundo`

console.log(saludar1('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3());

const getUser =() =>(
    {
        uid:'ABC123',
        username:'nicol'
    }
)
const user = getUser();
console.log(user);

//tarea

const getUsuarioActivo = (nombre)=>
    ({
         uid:'ABC567',
        username:nombre,
    })

const usuarioActivo = getUsuarioActivo('nicol');
console.log(usuarioActivo)