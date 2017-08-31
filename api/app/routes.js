'use strict';

module.exports = function(routes) {
  var authController = require('./controllers/authController'),
      userController = require('./controllers/userController'),
      postController = require('./controllers/postController'),
      auth = require('./helpers/auth');

  // auth
  routes.route('/login').post(authController.login);

  // user Routes
  routes.route('/users')
    .get(userController.index)
    .post(userController.create);
  routes.route('/users/check/name')
    .get(userController.checkName);
    routes.route('/users/check/email')
      .get(userController.checkEmail);
  routes.route('/users/:userId')
    .get(auth.isUser, userController.show)
    .put(userController.update)
    .delete(auth.isAdmin, userController.delete);

  // post Routes
  routes.route('/posts')
    .get(postController.index)
    .post(auth.isUser, postController.create);
  routes.route('/posts/:postId')
    .get(postController.show)
    .put(postController.update)
    .delete(auth.isAdmin, postController.delete);

  return routes;
};
