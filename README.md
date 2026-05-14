📡 MCP Server - Model Context Protocol (Node.js + TypeScript)
✨ Author

Name: Imane Lmzk
Project: MCP Server Learning Implementation

📌 Overview

This project demonstrates a basic implementation of an MCP (Model Context Protocol) Server using Node.js and TypeScript.

The MCP server acts as a bridge between AI models and external tools/data sources, allowing structured communication via standardized protocols.

🧠 What is MCP?

Model Context Protocol (MCP) is a protocol designed to allow AI systems to:

Access external tools (APIs, databases, services)
Retrieve structured data
Execute actions in a controlled environment

👉 Think of MCP as:

A middleware layer between an AI model and real-world systems.

🏗️ Architecture
Client (AI / App)
        │
        ▼
   MCP Server
        │
 ├── Tools (functions)
 ├── Resources (data)
 └── External APIs / DB
⚙️ Tech Stack
Node.js
TypeScript
Express (optional for HTTP transport)
JSON-RPC / HTTP
📂 Project Structure
mcp-server/
 ├── src/
 │   ├── server.ts        # MCP server entry point
 │   ├── tools/           # Tool definitions
 │   ├── resources/       # Data providers
 │   └── types/           # Type definitions
 ├── package.json
 └── tsconfig.json
🚀 Getting Started
1. Install dependencies
npm install
2. Run the server
npm run dev

Server runs on:

http://localhost:3000
🔌 MCP Core Concepts
1. Tools

Tools are functions exposed to the AI.

Example:

export const getUser = async (id: number) => {
  return { id, name: "Imane" };
};
2. Resources

Resources provide structured data.

export const users = [
  { id: 1, name: "Imane" },
  { id: 2, name: "Ali" }
];
3. Requests (JSON-RPC style)

Example request:

{
  "method": "tools/getUser",
  "params": { "id": 1 }
}
4. Response
{
  "result": {
    "id": 1,
    "name": "Imane"
  }
}
🧪 Example Endpoint (Express)
import express from "express";
import { getUser } from "./tools/getUser";

const app = express();
app.use(express.json());

app.post("/mcp", async (req, res) => {
  const { method, params } = req.body;

  if (method === "tools/getUser") {
    const result = await getUser(params.id);
    return res.json({ result });
  }

  res.status(400).json({ error: "Unknown method" });
});

app.listen(3000, () => {
  console.log("MCP Server running on port 3000");
});
📡 How MCP Works (Step-by-Step)
Client sends a request
MCP server interprets the method
Calls the appropriate tool
Returns structured response
🔗 Use Cases
AI assistants accessing databases
Automation systems
API orchestration
Tool-based AI agents
📈 Learning Goals
Understand MCP architecture
Build tool-based APIs
Structure backend for AI interaction
Practice TypeScript backend patterns
🔧 Useful Commands
npm run dev       # Start server
npm run build     # Compile TypeScript
npm start         # Run production build
📄 License

MIT

🚧 Status

In Progress — Learning MCP concepts and real-world integration.

💡 Final Insight

MCP is not just a server — it’s a design pattern for AI-integrated systems.
Mastering it means understanding how AI interacts with real-world data and tools.
