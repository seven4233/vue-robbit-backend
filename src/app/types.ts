import { Context } from "koa";

export interface MyContext extends Context {
    success(msg: string, result: any):void
}