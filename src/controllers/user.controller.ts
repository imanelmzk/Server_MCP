import {prisma} from '../lib/prisma';

/*export const getUsers = async(req :any, res:any) =>{
    const users = await prisma.user.findMany();
    res.json(users);
}*/
export const getUsers = async() => {
    const users = await prisma.user.findMany();
    return users;
};