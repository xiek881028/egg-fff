const Service = require('egg').Service;

class DemoService extends Service {
  async find(id) {
    const demo = {
      isLogin: true,
      username: 'aaa',
      id,
    };
    return demo;
  }
}

module.exports = DemoService;
