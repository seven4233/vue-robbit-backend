import Koa from 'koa'
const app = new Koa()

const registerRouter  = require('../router/index')
// 注册路由
registerRouter(app)


export default app