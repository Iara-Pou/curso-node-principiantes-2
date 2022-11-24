const http = require("http");
const process = require("process")

const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" })

    if (request.url === "/") {
        response.write("<h1>hola mundo</h1>")
    } else {
        response.write(`<h1>Not found</h1>
        <p>Esta página no se encontró</p>
        <a href='/'>Volver a la página principal</a>`)
    }

    response.end();
})

server.listen(3000);
console.log("servidor escuchando en el puerto 3000");

