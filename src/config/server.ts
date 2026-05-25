import express from 'express';
import {createUserSchema} from '../validators/user.schema';
import {z} from "zod";
import { getUsers } from '../controllers/user.controller';
import {createUser} from '../controllers/user.controller';
import {deleteUser} from '../controllers/user.controller';


//import { any } from 'zod/v4/mini';
//import userRoutes from '../routes/user.routes';

const app = express();

app.use(express.json());
                
    // * Typer "Method"
    type Method = keyof typeof tools;
    // * Typer "le body de la requete"
    type MCPRequest = {
        method: Method;
        params?: any;
    };
    // * Typer "Tool"
    type Tool<T> = {
        schema: z.ZodType<T>;
        handler: (params: T) => Promise<any>;
    };

   //* L'utilisation MCP + RCP
   const tools : Record<string, Tool<any>> = {
    "tools/createUser": {
        schema : z.object({
            //id: z.number(),
            name: z.string().min(1, "Name is required"),
            lastName: z.string().min(1, "Last name is required"),
        }), 
        handler: createUser
        },
        
        
      "tools/deleteUser":{
        schema: z.object({
            id: z.number(),
        }),
        handler: deleteUser
       },
    }  
    
   
   /*const tools ={
    "tools/getUsers": getUsers,
    "tools/createUser": createUser
   } as const;*/

   
app.post("/mcp", async (req, res) => {
    const {method, params} = req.body as MCPRequest; // les clés sont fixes et connus;

   const tool = tools[method]; // on accède à la méthode correspondante dans l'objet "tools" en utilisant le nom de la méthode fourni dans la requête. Le "as keyof typeof tools" est utilisé pour indiquer que "method" doit être une clé valide de l'objet "tools". Cela permet d'assurer que nous ne tentons pas d'accéder à une méthode qui n'existe pas dans l'objet "tools".
   if(!tool){
    return res.status(400).json({error: "Invalid method"});
   }
   try{
    // * Validation ICI
    const validatedParams = tool.schema.parse(params as any); // on utilise le schéma de validation associé à la méthode pour valider les paramètres fournis dans la requête. Si les paramètres ne sont pas conformes au schéma, une erreur de validation sera levée.

    // * Execution safe
    const result = await tool.handler(validatedParams);
    return res.json({result});
   }catch(error){
    if(error instanceof z.ZodError){
        return res.status(400).json({error:"Invalide Params", details: error});
    }
    return res.status(500).json({error: "Internal server error"});
   }


   //* Logique MCP
    /*
    if (method === "tools/getUsers") {
        const result = await getUsers();
        return res.json({result});
    }*/

});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})