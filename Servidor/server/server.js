import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3500;
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    })
);

const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: 'https://sockets-zv6w.onrender.com',
        methods: ['GET', 'POST'],
        credentials: true,
        transports: ['websocket', 'polling']
    },
    connectionStateRecovery: {
        maxDisconnectionDuration: 2 * 60 * 1000,
        skipMiddlewares: true
    }
});

import { configureSockets } from "./sockets/socket.js";
configureSockets(io)

app.use(express.static("public"));

server.listen(port, (error) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Server running in the port ${port}`);
});
