const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.originalUrl.includes("products") ? "products" : "users";
    cb(null, path.join(__dirname, `../../public/images/${type}`))
  },
  filename: (req, file, cb) => {
    const name = req.originalUrl.includes("products") ? "product-" : "avatar-";
    cb(null, name + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('El formato de la imagen debe ser jpeg, jpg, png o gif'));
    }
  }
});

module.exports = upload;
