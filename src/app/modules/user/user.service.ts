import User from "./user.model";

export const createUserToDB=async()=>{
    //creating instance
    const user =await new User({
      id: "56858844",
      role: "student",
      password: "123456",
      name: {
        firstName: "Test",
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
    return user;
  
    }