const guestMiddleware = (req, res, next) => {
  if(!req.session.userLogged && !req.cookies.userLogged){
    res.redirect('/login');
  }
  next();
}

module.exports = guestMiddleware;