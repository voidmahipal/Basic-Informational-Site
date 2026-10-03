import fs from "node:fs/promises"
import customError from "../errors/customnotfounderror.js";

async function getIndexContent(req,res) {
    
    const indexContent = await fs.readFile("./index.html","utf-8");
    if(!indexContent) {
        throw new customError("index content not found");
    }
    res.send(indexContent);
}

export default getIndexContent;