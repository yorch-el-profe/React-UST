const http = require("http");
const meals = require("./menu.json");

const server = http.createServer(function (request, response) {
	if (request.url === "/meals") {
		response.setHeader("Content-Type", "application/json");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.write(JSON.stringify(meals));
		response.end();
	} else {
		response.end();
	}
});

const port = process.env.PORT || 8080;

server.listen(port, function () {
	console.log(
		`Servidor React Meals escuchando peticiones en el puerto ${port}`
	);
});
