import { db } from "../database/conn.js";

const createTwitt = async (req, res)=>{

    const params = [
        req.body.twitt,
        req.body.user_name
    ];

    const sql = `insert into tbl_twitts 
                    (twitt, user_name)
                values 
                    ($1, $2) 
                returning id, user_name`;
                    
    const result = await db.query(sql, params);
    res.json(result);
}

const getTwitt = async (req, res) =>{
    const sql = ` select id, twitt , user_name  from tbl_post
    order by create_date desc `;
    const result = await db.query(sql);
    res.json(result);
}


export {
    createTwitt, 
    getTwitt
}