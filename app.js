const http = require("http");
const routes = require("./routes");

const SERVER = http.createServer(routes.handler);

SERVER.listen(8000);
