import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

// Routes
const app = express();

//Middleware
app.use(bodyParser.json({ limit: '20gb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20gb', extended: true }));
app.use(cors());
dotenv.config()

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@social.pso3a.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log('Lost connection')
})

//usage of routes

app.use(express.json());
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);

app.listen(process.env.PORT || 5001, () => {
    console.log(`Port running ${process.env.PORT}`)
})