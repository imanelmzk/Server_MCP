import {z} from "zod";

const createUserSchema = z.object({
    //id: z.number().int("ID must be an integer"),
    name: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Last name is required"),
});
export {createUserSchema};

const deleteUserSchema = z.object({
    id: z.number().int("ID must be an integer"),
});
export {deleteUserSchema};