import { Router } from "express";
import getContactMeContent from "../controllers/contactmecontroller.js";

const contactMeRouter = Router();

contactMeRouter.get("/",getContactMeContent);

export default contactMeRouter;