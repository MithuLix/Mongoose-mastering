import { Request, Response } from "express";
import { createUserToDB,getUsersFromDB, getUserByIdFromDB, getAdminUsersFromDB } from "./user.services";

export const creteUser =async(req:Request, res:Response) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status:"success",
        data:user
    });
};


export const getUsers = async (req: Request, res:Response) => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status:"success",
        data:user
    })
};


export const getUserById = async(req: Request, res:Response) => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id);
    console.log("hitted from getUserById");
    res.status(200).json({
        status:"success",
        data:user
    })
};


export const getAdminUsers = async(req: Request, res:Response) => {
    const user = await getAdminUsersFromDB();
    console.log("hitted from getAdminUsers");
    res.status(200).json({
        status:"success",
        data:user
    });
};