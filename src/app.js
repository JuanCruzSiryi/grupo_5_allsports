const express =  require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/products/productDetail.html"))
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/products/productCart.html"))
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/users/register.html"))
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/users/login.html"))
});


app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});