'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {

  async home_node(ctx) {
    const userInfo = await ctx.service.demo.find('123');
    await ctx.render('demo_home.js', { title: '这是服务端渲染的首页', mode: 'node', ...userInfo });
  }

  async details_node(ctx) {
    const id = ctx.params.id;
    await ctx.render('demo_details.js', { title: '这是服务端渲染的详情页', mode: 'node', id });
  }

  // async home_web(ctx) {
  //   await ctx.renderClient('demo_home.js', { title: '这是客户端渲染的首页', mode: 'web' });
  // }

  // async details_web(ctx) {
  //   const id = ctx.params.id;
  //   await ctx.renderClient('demo_details.js', { title: '这是客户端渲染的详情页', mode: 'web', id });
  // }

  // async spa(ctx) {
  //   await ctx.renderClient('demo_spa.js', {
  //     url: ctx.url,
  //     mode: 'spa',
  //   });
  // }

  // async spa_data(ctx) {
  //   const userInfo = await ctx.service.demo.find('123');
  //   ctx.body = {
  //     title: '这是spa渲染的首页',
  //     href: ctx.helper.surl('http://ww.safe.com<script>'),
  //     href2: ctx.helper.surl('<script>console.log(`~~~~~~~~~~~~~`)</script>'),
  //     ...userInfo,
  //   };
  // }
}

module.exports = DemoController;
