import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
//using cors
app.use(cors());

//Parse Data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    //Inserting a test data into mongodb
    /*
    step-1:  Interface
    step-2:  Schema
    step-3:  Model
    step-4: Database Query
    */
//   res.send("Hello World!");
//   next();
});

export default app;
