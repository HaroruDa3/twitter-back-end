import jwt from 'jsonwebtoken';

const validarCookie = async ( req, res, next )=>{


    let info = {
        operacion : false,
        payload : "Token no valido"
    }

    try {

        const payload = await jwt.verify(req.cookies.myCookie, 'secret');
        info.operacion = true;
        info.payload = payload;
        req.user = payload;
        next();

    }catch(err){

        res.status(404).json(err.message)
        
    }

}  

export{

    validarCookie

}