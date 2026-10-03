import fs from "node:fs/promises";
import customError from "../errors/customnotfounderror.js";

async function getContactMeContent(req,res) {
    
    const contactContent = await fs.readFile("./contact-me.html","utf-8");
    if(!contactContent) {
        throw new customError("contact info not found!");
    }
    res.send(contactContent);
}

export default getContactMeContent;