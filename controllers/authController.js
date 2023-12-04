import { db } from "../database/conn.js";
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const autenticacion = async (req, res)=>{

    console.log("Entre a metodo de Auth");

    let params = [
        req.body.user_name, 
        req.body.pass
    ]
    console.log(params);
    const sql = ` select user_name, email from tbl_user 
                    where user_name =  $1
                    and pass = $2 
                    and is_active = true` ;

    const result  = await db.query(sql, params);
    console.log(result);
    if (result.length > 0) {
        console.log(result);
        const payload = {
            user_name : result[0].user_name,
            email :   result[0].email
        };


        const token = jwt.sign( payload, 'secret' , { expiresIn: '1h' });
        const tokenCookie = cookie.serialize('myCookie', token, {
            httpOnly : true,
            secure : true,
            sameSite : 'none',
            maxAge : (60*60),
            path : '/'
        })

        res.setHeader('Set-Cookie', tokenCookie);

        res.json({mensaje : "Autenticacion Exitosa"})

    }else {
        res.status(404).json({mensaje : "Autenticacion No Exitosa"})
    }

}

const validarCookieActiva = (  req, res)=>{

    res.json(req.user);

}


export  {
    autenticacion, 
    validarCookieActiva
}