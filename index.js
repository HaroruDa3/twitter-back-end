import  Express  from 'express';
const app = Express();

import { auth } from "./routes/apiAuth.js";
import { users } from "./routes/apiUser.js";
import { twitt } from "./routes/apiTwitter.js";
import cookieParser from "cookie-parser";

import cors from 'cors';
//Middleware 
app.use(Express.json());
app.use(Express.static('public'));
app.use(cookieParser());


const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5173/otra-ruta',
        // Agrega otras rutas según sea necesario
    ],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/posts', twitt);

//puerto que se comunica el frontEnd
app.listen(3000);