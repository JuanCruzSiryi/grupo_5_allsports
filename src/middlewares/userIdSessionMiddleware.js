const userSessionIdMiddleware = (req, res, next) => {
  if(req.session && req.session.userIdLogged){
    res.locals.userIdLogged = req.session.userIdLogged;
    // console.log("user logged by session id: ", req.session.userIdLogged);
  }
  if(req.cookies && req.cookies.userIdLogged){
    /* si el usuario quizo ser recordado lo recordamos */
    res.locals.userIdLogged = req.cookies.userIdLogged;
    req.session.userIdLogged = req.cookies.userIdLogged;
    // console.log("user logged by cookie id: ", req.session.userIdLogged);
  }
  next();
}

module.exports = userSessionIdMiddleware;