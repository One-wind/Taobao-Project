'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `<div>
    <h1>hello egg!</h1>
    </div>`;
  }

  
  async main() {
    const { ctx } = this;
    ctx.body = `<div>
    <h1>main</h1>
    </div>`;
  }
}

module.exports = HomeController;
