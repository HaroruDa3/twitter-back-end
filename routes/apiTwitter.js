import Express  from "express";
const twitt = Express();
import { createTwitt, getTwitt } from "../controllers/twittController.js";
twitt.post(''  , createTwitt);
twitt.get('', getTwitt);


export {
    twitt
}