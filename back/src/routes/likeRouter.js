import {Router} from "express"
import {loginRequired } from "../middlewares/loginRequired";
import {likeService} from "../services/likeService";

const likeRouter = Router();


likeRouter.post("/",  loginRequired, async (req, res, next) => {
    try{
        const userId = req.currentUserId ;
        const locationId = req.body.locationId ?? null;

        const newLike = await likeService.addLike({
            userId, 
            locationId
        });

        if(newLike.errorMessage){
            throw new Error(newLike.errorMessage);
        }

    res.status(200).json(newLike);
    }catch (error) {
        next(error);
    }
});



likeRouter.get("/", loginRequired, async (req, res, next)=> {
    try{
        const userId = req.currentUserId;
        const like = await likeService.getLikes(userId);
        res.status(200).send(like);
    }catch(error){
        next(error);
    }
});

likeRouter.delete("/:locationId/", loginRequired,  async(req, res, next) => {
    try{
        const userId = req.currentUserId;
        const locationId = Number.parseInt(req.params.locationId, 10);

        const deletedLike = await likeService.delLike({userId, locationId});
        if(deletedLike.errorMessage){
            throw new Error(deletedLike.errorMessage);
        }
        res.status(200).json(deletedLike);
    }catch(error){
        next(error);
    }
});




export {likeRouter};
