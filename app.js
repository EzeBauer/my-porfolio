const express = require("express");
const app = express();
const port = 3000;

/*pongo a correr el servidor*/
app.listen(port, () => console.log("Server runing in " + port));
/*Declaro la carpeta de recursos estaticos*/
app.use(express.static("public"));

/*rutas*/
const indexRouter = require("./routers/main"); /*enrutador*/

app.use( "/",indexRouter); /*use me permite que este presente el recurso en todo el sitio*/
