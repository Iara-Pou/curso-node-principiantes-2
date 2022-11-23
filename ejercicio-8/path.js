const path = require("path");

//path.join --> paso los directorios en orden y devuelve la ruta, uniendolos diferente segun el sistema operativo de la computadora
const filePath = path.join("C:", "Users", "debor", "Desktop", "curso-node-principiantes-2", "ejercicio-8", "path.js"); 
console.log(filePath);

//devuelve el último archivo de la ruta
console.log(path.basename(filePath));

//devuelve ruta sin último archivo
console.log(path.dirname(filePath));

//devuelve el path como un objeto, para manipular más fácil sus datos
console.log(path.parse(filePath));

//devuelve la ruta hasta ahora, sumando un directorio más
console.log(path.resolve("archivo nuevo"));
