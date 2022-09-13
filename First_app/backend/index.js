import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/firstappRouter"

const app= express();
const PORT=4000;

// mongo connection
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/firstappDB',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

// bodyparser setup

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())

// setup for cors
app.use(cors());

routes(app);

app.get('/', (req,res)=>
res.send(`Our First-App is running successfully on Port ${PORT}`)
);

app.listen(PORT,()=>
console.log(`Your First_App is running successfully on Port ${PORT}`)
);
