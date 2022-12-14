import { Schema, model, Types } from "mongoose";

const LikeSchema = new Schema(
    {
        _id: {
            type: String,
            default: () => String(new Types.ObjectId())
        },
        locationId:{
            type: Number, 
            required: true
        },
        userId:{
            type: String, 
            required: true,
       },
       isLike:{
            type: Boolean,
            required: true,
            default: true
       }
    },
    {
        timestamps: true
    }
)

const LikeModel = model("Like", LikeSchema);

export { LikeModel };
