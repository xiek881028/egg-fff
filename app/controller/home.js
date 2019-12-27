'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // async demo1() {
  //   const { ctx } = this;
  //   await ctx.render('demo.js', { message: 'demo1', url: ctx.url, aaa: 'node' });
  // }

  // async demo2() {
  //   const { ctx } = this;
  //   await ctx.renderClient('demo.js', { message: 'demo2', aaa: 'web' });
  // }
}

module.exports = HomeController;
