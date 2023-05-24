function editProfileMiddleware(req, res, next) {
  const userId = req.params.id;
  const authenticatedUserId = req.session.userLogged.id;
  console.log("####################### authenticatedUserId", authenticatedUserId, "userId", userId, userId==authenticatedUserId);

  if (userId != authenticatedUserId) {
    return res.redirect('/');
  }

  next();
}

module.exports = editProfileMiddleware;