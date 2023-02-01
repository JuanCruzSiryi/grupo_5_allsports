const title = "All-SPORTS"
const stylesheetFile = "index.css"

const mainController = {
  index: (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    res.render('index', {title, stylesheetFile})
  }
}

module.exports = mainController;