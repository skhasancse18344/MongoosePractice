import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

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

  //Creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }
  //creating schema using interfaces
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
  // avatar: String

  //creating model using interfaces
  const User = model("User", userSchema);

  const createUserToDB=async()=>{
  //creating instance
  const user = new User({
    id: "568",
    role: "student",
    password: "123456",
    name: {
      firstName: "John",
      middleName: "Doe",
      lastName: "Doe",
    },
    dateOfBirth: "1990-01-01",
    gender: "male",
    email: "envkt@example.com",
    contactNo: "1234567890",
    emergencyContactNo: "1234567890",
    presentAddress: "123 Main Street",
    permanentAddress: "123 Main Street",
  });
  //inserting data into database
  await user.save();
  console.log(user);

  }
  createUserToDB();

});

export default app;
