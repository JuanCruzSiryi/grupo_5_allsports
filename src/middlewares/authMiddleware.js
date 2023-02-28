const authMiddleware = (req, res, next) => {
  console.log("in authmiddleware ->:", req.session.userLogged);
  if(req.session.userLogged){
    return res.redirect('/profile');
  }
  next();
}

module.exports = authMiddleware;