const express = require('express');
const app = express();
require('dotenv').config();

/* Puerto de la aplicación */
const PORT = process.env.APP_PORT || 4000;
// en caso de no encontrar el puerto original que utilice el puerto 4000

/* Import de las rutas */
const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const itemsRoutes = require('./src/routes/itemsRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const errorsHandler = require('./src/utils/errorsHandler.js');

/* Define carpeta de archivos estaticos */
app.use(express.static('public'));

/* Configuración del Template Engine EJS */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Parsea los datos recibidos por POST */
app.use(express.urlencoded());
app.use(express.json());

app.use('/', mainRoutes);
app.use('/', adminRoutes);
app.use('/', itemsRoutes);
app.use('/', shopRoutes);

app.use(errorsHandler[404]);
  
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));