import {z} from "zod";

const createUserSchema = z.object({
    //id: z.number().int("ID must be an integer"),
    name: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Last name is required"),
});
export {createUserSchema};

export const updateUserSchema = z.object({
    id: z.number().int("ID must be an integer"),
    name: z.string().min(1, "Name is required").optional(),
    lastName: z.string().min(1, "Last name is required").optional(),
});


const deleteUserSchema = z.object({
    id: z.number().int("ID must be an integer"),
});
export {deleteUserSchema};