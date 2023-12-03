import Express  from "express";
const users = Express();
import { createUser } from "../controllers/userController.js";

users.post('', createUser);


export {
    users
}