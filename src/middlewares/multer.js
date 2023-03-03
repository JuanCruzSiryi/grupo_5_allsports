const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage( {
  destination: (req, file, cb) => {
    const type = req.originalUrl.includes("products")? "products" : "users";
    cb(null, path.join(__dirname, `../../public/images/${type}`))
  },
  filename: (req, file, cb) => {
    const name = req.originalUrl.includes("products")? "product-" : "avatar-";
    cb(null, name + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

module.exports = upload;