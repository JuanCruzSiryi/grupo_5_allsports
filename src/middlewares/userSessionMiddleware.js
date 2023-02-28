const userSessionMiddleware = (req, res, next) => {
  if(req.cookies && req.cookies.userLogged){
    /* si el usuario quizo ser recordado lo recordamos */
    res.locals.userLogged = req.cookies.userLogged;
    req.session.userLogged = req.cookies.userLogged;
  }
  if(req.session && req.session.userLogged){
    res.locals.userLogged = req.session.userLogged;
  }
  next();
}

module.exports = userSessionMiddleware;