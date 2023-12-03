import Express  from "express";
const auth = Express();
import { autenticacion , validarCookieActiva } from "../controllers/authController.js";
import { validarCookie } from "../helpers/helperCookie.js";

auth.post( '',  autenticacion);
auth.get('', validarCookie, validarCookieActiva );

export {
    auth
}