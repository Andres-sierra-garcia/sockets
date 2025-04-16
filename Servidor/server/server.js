import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import * as io from 'socket.io';
import {socketController} from './sockets/controllers.js';

dotenv.config();

class server {
    constructor(){
        this.app= express();
        this.port = process.env.port;
        this.server = http.createServer(this.app);
        this.io = new io.Server(this.server);
        this.paths = {};
        
    }
}