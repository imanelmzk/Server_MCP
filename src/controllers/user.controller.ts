import { NewUser } from './../../generated/prisma/browser';
import {prisma} from '../lib/prisma';

/*export const getUsers = async(req :any, res:any) =>{
    const users = await prisma.user.findMany();
    res.json(users);
}*/
export const getUsers = async() => {
    const users = await prisma.newUser.findMany();
    return users;
};

export const createUser = async(params:{
    //id: number;
    name : string;
    lastName : string;
}) =>{
    const newUser = await prisma.newUser.create({
        data: params
    });
    return newUser;
}

export const deleteUser = async (params:{id:number}) =>{
    return prisma.newUser.delete({
        where: {id: params.id}
    });
}