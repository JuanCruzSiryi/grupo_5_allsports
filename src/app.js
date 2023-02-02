const express =  require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3005;

/* Import index route from main,js */ 
const routesMain = require('./routes/mainRoutes');

const routesProducts = require('./routes/products');

const routesUsers = require('./routes/users');


/* Access to the static resources folder is configured */
app.use(express.static("public"));

/* EJS is configured as the app's template engine */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./views/"));

/* Implement index route in the app */
app.use("/", routesMain); 

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/index.html"))
// });

app.use("/", routesProducts); 

// app.get("/productDetail", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/products/productDetail.html"))
// });

app.use("/", routesProducts);

// app.get("/productCart", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "./views/products/productCart.html"))
// });

app.use("/", routesUsers);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});