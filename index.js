import express from "express";
import Mongoose  from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import route from "./routes/routes.js";

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/', route);

const PORT = 8000;
const URL = 'mongodb+srv://user:userName@employee-portal.21sbw.mongodb.net/PROJECT0?retryWrites=true&w=majority';

Mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running successfully on port http://localhost:${PORT}/`);
    });
}).catch((error)=>{console.log("Error: ", error.message)});
