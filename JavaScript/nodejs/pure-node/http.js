const http = require('nodejs/pure-node/http');


const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html")
    response.write("<h1>Hello there<h1/>");
    response.end();
});

server.listen(3000)