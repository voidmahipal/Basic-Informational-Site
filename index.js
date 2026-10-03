import express from 'express'
import aboutRouter from './routes/aboutroute.js';
import contactMeRouter from './routes/contactroute.js';
import indexRouter from './routes/indexroute.js';

const app = express();

app.use("/",indexRouter);
app.use("/about",aboutRouter);
app.use("/contact-me",contactMeRouter);
app.use("/{*splat}",(req,res,next)=>{
    const error = new Error("Page Not found");
    error.statusCode = 404;
    next(error);
})
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(8080,(error)=>{
    if(error) {
        throw error;
    }
})