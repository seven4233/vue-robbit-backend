
// 全局异常处理器
const errorHandler = async(ctx:any, next:any)=>{
    try {
        await next()
    } catch (error:any) {
        if(error){
            ctx.status = 400
            return ctx.body = {
                msg: error.message,
                code:error.code,
                result: error.result
            }
        }
    }
}



export default errorHandler