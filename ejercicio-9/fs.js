const fs = require("fs");

// const primerTexto= fs.readFileSync("./texto/texto1.txt", "utf-8");
// const segundoTexto= fs.readFileSync("./texto/texto2.txt", "utf-8");

// console.log(primerTexto, segundoTexto);

// const contenidoNuevo = " me llamo iara";
// const textoNuevo = fs.writeFileSync("./texto/textoNuevo.txt", contenidoNuevo, {
//     flag: "a"
// });

fs.readFile("./texto/texto1.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});
fs.readFile("./texto/texto2.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});


