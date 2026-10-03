import { Router } from "express";
import getAboutContent from "../controllers/aboutcontroller.js";

const aboutRouter = Router();

aboutRouter.get("/",getAboutContent);

export default aboutRouter;