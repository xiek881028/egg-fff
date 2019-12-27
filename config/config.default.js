/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573185417913_1241';

  // add your middleware config here
  config.middleware = [
    // 'user',
  ];

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      db: 0,
    },
  };

  config.session = {
    key: 'SESSION_ID',
    // maxAge: 24 * 3600 *1000,
    maxAge: 10 *1000,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };

  // config.siteFile = {
  //   '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  // };

  config.reactssr = {
    // renderOptions: {
    //   basedir: path.join(appInfo.baseDir, 'app/view'),
    // },
    layout: path.join(appInfo.baseDir, 'app/web/view/layout.html'),
    // injectCss: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
