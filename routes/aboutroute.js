import { Router } from "express";

const aboutRouter = Router();

aboutRouter.get("/",(req,res)=>{
    res.sendFile("about.html",{root:process.cwd()});
})

export default aboutRouter;