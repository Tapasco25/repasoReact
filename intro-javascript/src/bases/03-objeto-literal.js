const persona = {
    nombre:"Nicol",
    apellido:"Tapasco",
    edad:17,
    direccion:{
        ciudad:"Popayan",
        zip:12345678,
        lat:14.76543,
        lng:34.654325,
    }
    };
    
    
    
    const persona2 = {...persona};
    persona2.nombre = "Camila";
    console.log(persona)
    console.log(persona2)