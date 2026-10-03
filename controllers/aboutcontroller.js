import fs from "node:fs/promises";
import customError from "../errors/customnotfounderror.js";

async function getAboutContent(req,res) {
    
    const aboutContent = await fs.readFile("./about.html","utf-8");
    if(!aboutContent) {
        throw new customError("about info not found!");
    }
    res.send(aboutContent);
}

export default getAboutContent;