const Router = require("koa-router")
import { MyContext } from '../../src/app/types'
import userController from '../../src/controller/user.controller'

const userRouter = new Router({prefix: '/user'})
// 测试接口
userRouter.get('/test', async (ctx: MyContext)=>{
    ctx.body = '测试接口'
})

// 注册用户接口
userRouter.post('/register', userController.register)

// 登录接口
userRouter.post('/login', userController.login)


export default userRouter