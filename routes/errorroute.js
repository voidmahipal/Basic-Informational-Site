import { Router } from "express";

const errorRouter = Router();

errorRouter.get("/",(req,res)=>{
    res.sendFile("404.html",{root:process.cwd()});
})

export default errorRouter;