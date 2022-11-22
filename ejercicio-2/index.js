function darDatosUsuario(nombreUsuario, edadUsuario) {
    return `${nombreUsuario} tiene ${edadUsuario} años`;
}

function AvisarSiEsAdulto(edadUsuario) {
    if (edadUsuario >= 18) {
        return "es un adulto";
    } else {
        return "no es adulto";
    }
}

const usuarios = [{
    nombre: "carla",
    edad: 30
},
{
    nombre: "nora",
    edad: 21
},
{
    nombre: "luis",
    edad: 10
}];

for (let i = 0; i < usuarios.length; i++) {
    const nombreUsuario = usuarios[i].nombre;
    const edadUsuario = usuarios[i].edad;

    console.log(
        `${darDatosUsuario(nombreUsuario, edadUsuario)}, entonces ${AvisarSiEsAdulto(edadUsuario)}.`
    )
}
