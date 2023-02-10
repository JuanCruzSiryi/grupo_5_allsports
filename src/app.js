const express =  require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3005;

/* Include PUT and DELETE methods */
const methodOverride = require('method-override');

/* Import index route from main,js */ 
const routesMain = require('./routes/mainRoutes');

const routesProducts = require('./routes/products');

const routesUsers = require('./routes/users');

/* Access to the static resources folder is configured */
app.use(express.static("public"));

/* EJS is configured as the app's template engine */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views/"));

/* Receive data from forms */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Include PUT and DELETE methods */
app.use(methodOverride('_method'))

/* Implement index route in the app */
app.use("/", routesMain); 

app.use("/", routesProducts); 

app.use("/", routesUsers);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});