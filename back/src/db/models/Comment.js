import { CommentModel } from "../schemas/comment";

const Comment = {
    create: async (newComment) => {
        let createdComment = await CommentModel.create(newComment);
        
        if(createdComment) {
            createdComment = {
                commentId: createdComment._id,
                reviewId: createdComment.reviewId,
                userId: createdComment.userId,
                nickName: createdComment.nickName,
                contents: createdComment.contents,
                createdAt: createdComment.createdAt
            }
        }

        return createdComment;
    },
    findAll: async (reviewId) => {
        let comments = await CommentModel.find({ reviewId });
        if(comments) {
            comments = comments.map((data) => {
                return {
                    commentId: data._id,
                    reviewId: data.reviewId,
                    userId: data.userId,
                    nickName: data.nickName,
                    contents: data.contents,
                    createdAt: data.createdAt
                }
            })
        }

        return comments;
    },
    findById: async (reviewId, commentId) => {
        let comment = await CommentModel.findById({ _id: commentId, reviewId });

        if(comment) {
            comment =  {
                commentId: comment._id,
                reviewId: comment.reviewId,
                userId: comment.userId,
                nickName: comment.nickName,
                contents: comment.contents,
                createdAt: comment.createdAt
            }
        }

        return comment;
    },
    update: async (reviewId, commentId, fieldToUpdate, newValue) => {
        const filter = { _id: commentId, reviewId };
        const update = { [fieldToUpdate] : newValue };
        const option = { returnOriginal: false };
        const updatedComment = await CommentModel.findOneAndUpdate(
            filter,
            update,
            option
        );

        return updatedComment;
    },
    delete: async (reviewId, commentId) => {
        const deletedComment = await CommentModel.findOneAndDelete({ _id: commentId, reviewId });

        return deletedComment;
    },
    deleteAll: async ({reviewId}) => {
        console.log(reviewId)
        const deletedComments = await CommentModel.deleteMany({reviewId:reviewId} );
        // console.log(deletedComments)
        return deletedComments;
    }
    
};

export { Comment };
