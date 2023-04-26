const adminMiddleware = (req, res, next) => {
  if(!req.session.userLogged || req.session.userLogged.role_id != 2 ){
    return res.redirect('/');
  }
  next();
}

module.exports = adminMiddleware;