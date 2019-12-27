'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isLoginForApi = app.middleware.isLogin({api: true});
  const isLoginForView = app.middleware.isLogin({api: false});

  router.get('/', isLoginForView, controller.home.index);
  // router.get('/login', controller.user.login);
  // router.get('/api/login', isLoginForApi, controller.user.api_login);
  // router.get('/demo1', controller.home.demo1);
  // router.get('/demo2', controller.home.demo2);
  router.get('/demo/node', isLoginForView, controller.demo.home_node);
  router.get('/demo/node/details/:id', controller.demo.details_node);
  // router.get('/demo/web', controller.demo.home_web);
  // router.get('/demo/web/details/:id', controller.demo.details_web);
  // router.get('/demo/spa/*', controller.demo.spa);
  // router.get('/demo/spa', controller.demo.spa);
  // router.post('/demo/spa_data', controller.demo.spa_data);
};
