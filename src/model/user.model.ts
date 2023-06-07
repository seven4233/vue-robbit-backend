import db from "../db";

class UserModel {
    // 创建用户
    async create(account:string, password:string){
      const user = await db.user.create({
            data: {
                account,
                password
            }
        })
        return user
    }
}
const userModel = new UserModel()
export default userModel