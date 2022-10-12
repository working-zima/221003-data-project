const express = require("express");
// const reviewRouter = require("express").Router();
// const { login_required } = require( "../middlewares/login_required");
const reviewService = require("../services/reviewService");

const reviewRouter = express.Router();

reviewRouter.post("/reviews",  async (req, res, next) => {
    try{
        const userId = req.body.userId??null;
        const title = req.body.title ?? null;
        const contents = req.body.contents??null;
        const locationName = req.body.locationName??null;
        const landAddress = req.body.landAddress??null;
        const roadAddress = req.body.roadAddress??null;

        const newReview = await reviewService.addReview({
            userId,
            title,
            contents,
            locationName,
            landAddress,
            roadAddress
        });

        if(newReview.errorMessage){
            throw new Error(newReview.errorMessage);
        }

    res.status(200).json(newReview);
    }catch (error) {
        next(error);
    }
});

reviewRouter.get("/reviews", async (req, res, next)=> {
    try{
        // console.log("ㅇㄴㅁㄹㄴㅇ")
        const reviews = await reviewService.getReviews();
        console.log("router:" ,reviews)
        res.status(200).send(reviews);
    }catch(error){
        next(error);
    }
});

reviewRouter.get("/reviews/:reviewId", async (req, res, next) => {
    try{

        const reviewId = req.params.reviewId;
        const reviewInfo = await reviewService.getReview({reviewId});

        if(reviewInfo.errorMessage){
            throw new Error(reviewInfo.errorMessage)
        }

        res.status(200).send(reviewInfo);
    } catch(error){
        next(error);
    }

})

reviewRouter.put("/reviews/:reviewId", async (req, res, next)=> {
    try {
        const reviewId = req.params.reviewId;
        const title = req.body.title?? null;
        const contents = req.body.contents??null;

        const toUpdate = {title, contents};
        // console.log(toUpdate)
        const updatedReview = await reviewService.setReview({reviewId, toUpdate});

        if (updatedReview.errorMessage){
            throw new Error(updatedReview.errorMessage);
        }

        res.status(200).json(updatedReview);
    }catch(err){
        next(err);
    }
});

reviewRouter.delete("/reviews/:reviewId",  async(req, res, next) => {
    try{
        const reviewId = req.params.reviewId;
        // console.log("reviewId: ", reviewId)
        const deletedReview = await reviewService.delReview({reviewId});
        // console.log(deletedReview)
        if(deletedReview.errorMessage){
            throw new Error(deletedReview.errorMessage);
        }
        res.status(200).json(deletedReview);
    }catch(error){
        next(error);
    }
});

module.exports = reviewRouter;