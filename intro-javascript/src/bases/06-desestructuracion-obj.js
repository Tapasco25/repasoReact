const persona = {
    nombre:"Nicol",
    edad:17,
    clave:"Ironman"
};
// const {nombre,edad,clave} = persona
// console.log(nombre)

const useContext = ({clave, nombre, edad, rango="capitan"}) => {
// console.log(nombre, edad,rango)
return{
    nombreClave: clave,
    anios:edad,
    latLng: {
        lat:14.876,
        lng:-12.543,
    }
    }
}

const {nombreClave, anios, latLng:{lat, lng}} = useContext (persona);

console.log(nombreClave, anios)
console.log(lat, lng)