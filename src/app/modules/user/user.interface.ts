export interface IUser {
    id: string;
    roll: string;
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

  export interface IUserMethods {
    fullName(): string;
  }