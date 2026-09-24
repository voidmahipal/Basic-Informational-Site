import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (req,res)=>{

    if(req.url==='/') {
        const indexContent = await fs.readFile('./index.html','utf-8');
        res.writeHead(200,{ "content-type" : "text/html" });
        res.end(indexContent);
    }
    else if(req.url==='/about') {
        const aboutContent = await fs.readFile('./about.html','utf-8');
        res.writeHead(200,{ "content-type" : "text/html" });
        res.end(aboutContent);
    }
    else if(req.url==='/contact-me') {
        const contactContent = await fs.readFile('./contact-me.html','utf-8');
        res.writeHead(200,{ "content-type" : "text/html" });
        res.end(contactContent);
    }
    else{
        const errorContent = await fs.readFile('./404.html','utf-8');
        res.writeHead(404,{ "content-type" : "text/html" });
        res.end(errorContent);
    }
});

server.listen(8080);