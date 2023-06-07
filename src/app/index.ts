import { port } from "../config";
import app from "./app";


app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})