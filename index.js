import fs from 'node:fs/promises'
import express from 'express'
import aboutRouter from './routes/aboutroute.js';
import contactMeRouter from './routes/contactroute.js';
import indexRouter from './routes/indexroute.js';
import errorRouter from './routes/errorroute.js';

const app = express();

app.use("/",indexRouter);
app.use("/about",aboutRouter);
app.use("/contact-me",contactMeRouter);
app.use("/{*splat}",errorRouter);

app.listen(8080,(error)=>{
    if(error) {
        throw error;
    }
})