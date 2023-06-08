import app from "./app";

// 使用路由
import '../router/index'
import { Server } from "http";


export const run = (port: any):Server =>{
    return app.listen(port , ()=>{
        console.log(`server is running at ${port}`);
    })
}
