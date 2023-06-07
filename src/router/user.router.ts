import Router from 'koa-router'

const userRouter = new Router({prefix: '/user'})
userRouter.get('/test', async ctx=>{
    ctx.body = '测试接口'
})

module.exports= userRouter