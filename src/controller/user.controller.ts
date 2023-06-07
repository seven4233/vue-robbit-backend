import { MyContext } from "../../src/app/types";
import db from "../../src/db";
import Exception from "../../src/utils/exception";
import jwt from 'jsonwebtoken'
import userModel from "../../src/model/user.model";

class UserController {
    
    /**
     * 登录
     * @param ctx 
     */
    async login(ctx: MyContext){
        const {account, password} = ctx.request.body
        const isExist = await db.user.findUnique({where: {account}})
        if(!isExist){
            throw new Exception("用户不存在", '400')
        }
        
        const user = await db.user.findFirst({where: {account, password}})
        if(!user){
            throw new Exception("账号或密码错误", '400')
        }
        // token
        const token = jwt.sign({account: user.account, id: user.id}, "linfeng", {expiresIn: '1h'})
        ctx.success('登录成功', {...user, token} )
    }

    /**
     * 注册
     * @param ctx 
     * @returns 
     */
    async register(ctx: MyContext){
        console.log(ctx.request.body);
        const {account, password} = ctx.request.body
        const isExist = await db.user.findUnique({where: {account}})
        if(isExist){
            return  ctx.body = {
                status: 400,
                message: '用户已存在'    
            }
        }
        const user = await userModel.create(account, password)
        console.log(user);
        ctx.success('注册成功', user)
    }
}

const userController = new UserController()
export default userController