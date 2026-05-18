import express from 'express';
//import userRoutes from '../routes/user.routes';

const app = express();

app.use(express.json());

// app.use('/api', userRoutes);
app.post("/mcp", (req, res) => {
    const {method, params} = req.body;

    //* Logique MCP
});

//app.get("/", (req, res) => {
//    res.send("API is running...");
//});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})