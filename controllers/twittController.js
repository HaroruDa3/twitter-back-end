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
    const sql = `
    SELECT
    twitt, user_name,
    TO_CHAR(create_date, 'DD-Mon-YY HH:MI am') AS formatted_create_date
    FROM
    tbl_twitts
    ORDER BY
        create_date DESC;
    `;
    const result = await db.query(sql);
    res.json(result);
}


export {
    createTwitt, 
    getTwitt
}