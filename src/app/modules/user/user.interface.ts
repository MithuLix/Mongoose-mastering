import { HydratedDocument, Model } from "mongoose";


export interface IUser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  email?: string;
  gender: "male" | "female" | "others";
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
};

//instance method
export interface IUserMethods {
  fullName(): string;
};

//static method + instance method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
};
