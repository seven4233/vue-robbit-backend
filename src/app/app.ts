import Koa from 'koa'
const app = new Koa()
import koaBody from 'koa-body'
const cors = require('@koa/cors')
import errorHandler from './error'
import { MyContext } from './types'

app.use(errorHandler)
app.use(koaBody())
app.use(cors())

// 挂载全局success函数
app.use(async (ctx: MyContext, next)=>{
    
    const success = (msg: string, result:any = null)=>{
        ctx.body = {
            msg,
            code: 0,
            result
        }
    }
    ctx.success = success
    await next()
})


export default app