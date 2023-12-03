import { response } from "express";
import { db } from "../database/conn.js";

const createUser = async (req, res) =>{

    const params = [
        req.body.user_name, 
        req.body.email,
        req.body.pass
    ]

    const sql =  `insert into tbl_user 
                    (user_name, email, pass)
                  values 
                    ($1, $2, $3) 
                    returning *
                `;
    
    const result = await db.query(sql, params);
    res.json({  msg: "Registro Exitoso",
                status: 200,
                data: result     
            });
}


export{
    createUser
}