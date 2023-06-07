import app from "../app/app";
import userRouter from "./user.router";


app.use(userRouter.routes()).use(userRouter.allowedMethods())