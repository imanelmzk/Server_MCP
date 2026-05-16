import {prisma} from '../lib/prisma';

export const getUsers = async(req :any, res:any) =>{
    const users = await prisma.admin.findMany();
    res.json(users);
}