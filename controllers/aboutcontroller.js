import fs from "node:fs/promises";
import customError from "../errors/customnotfounderror.js";

async function getAboutContent(req,res) {
    
    res.render("about",{message:"You requested for our about page"});
}

export default getAboutContent;