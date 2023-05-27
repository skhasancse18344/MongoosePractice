import { NextFunction, Request, Response } from "express";
import { createUserToDB,getUserByIdFromDatabase,getUserFromDatabase } from "./user.service";

export const createUSer=async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user =await createUserToDB(data);
    res.status(200).json({
        status: 'success',
        data: user,
    })

};
export const getUsersFromDb =async(req: Request, res: Response, next: NextFunction) => {
    const user =await getUserFromDatabase()
    res.status(200).json({
        status: 'success',
        data: user,
    })

};
export const getUsersByIdFromDb =async(req: Request, res: Response, next: NextFunction) => {
    const {id}=req.params;
    const user =await getUserByIdFromDatabase(id);
    res.status(200).json({
        status: 'success',
        data: user,
    })

};


//Pattern

//route -> controller -> service --> model -> interface