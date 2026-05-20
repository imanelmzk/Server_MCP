import express from 'express';
import { getUsers } from '../controllers/user.controller';
//import userRoutes from '../routes/user.routes';

const app = express();

app.use(express.json());

// app.use('/api', userRoutes);
app.post("/mcp", async (req, res) => {
    const {method, params} = req.body;

    //* Logique MCP
    if (method === "tools/getUsers") {
        const result = await getUsers();
        return res.json({result});
    }
    res.status(400).json({error: "Method not found"});
});

//app.get("/", (req, res) => {
//    res.send("API is running...");
//});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})