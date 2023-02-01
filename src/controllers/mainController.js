const path = require("path");

const title = "All-SPORTS"

const mainController = {
  index: (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    res.render('index', {title})
  }
}

module.exports = mainController;