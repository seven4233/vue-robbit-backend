import { port } from "../config";
import app from "./app";

// 使用路由
import '../router/index'

app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})