const http = require("http");
const routes = require("./routes");
const name = require("./events");

console.log(name);

const server = http.createServer(routes);
server.listen(3000);
