import { Router } from "express";

const contactMeRouter = Router();

contactMeRouter.get("/",(req,res)=>{
    res.sendFile("contact-me.html",{root:process.cwd()});
})

export default contactMeRouter;