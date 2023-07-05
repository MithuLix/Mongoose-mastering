import { NextFunction, Request, Response } from "express";
import { createUserToDB,getUsersFromDB, getUserByIdFromDB } from "./user.serveice";

export const creteUser =async(req:Request, res:Response, next:NextFunction) => {
   
   const data = req.body;
const user = await createUserToDB(data);

    res.status(200).json({
        status:"success",
        data:user
    });
};


export const getUsers = async (req: Request, res:Response, next:NextFunction) => {
    const user = await getUsersFromDB();

    res.status(200).json({
        status:"success",
        data:user
    })
};



export const getUserById = async(req: Request, res:Response, next:NextFunction) => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id);

    res.status(200).json({
        status:"success",
        data:user
    })
}