import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
    //creating instance
    const user =await new User(payload);
    //inserting data into database
    await user.save();
    return user;
  
    }
    export const getUserFromDatabase =async ():Promise<IUser[]>=>{
      const users = await User.find({})
      return users;
    }
    export const getUserByIdFromDatabase =async (payload:string):Promise<IUser| null>=>{
      const user = await User.findOne({id: payload});
      return user;
    }