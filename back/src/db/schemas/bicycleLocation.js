import { Schema, model, Types } from "mongoose";

const bicycleLocationSchema = new Schema(
     {
          _id: {
               type: String,
               default: () => String(new Types.ObjectId())
          },
          roadAddress:{
               type: String, 
               required: true
          },
          rentalLocationId:{
               type: Number, 
               required: true,
          },
          locationName:{
               type: String,
               required: true,
          },
          longitude:{
               type: Number,
               required: true,
          },
          latitude:{
               type: Number,
               required: true,
          },
          isRental:{
               type: Boolean,
               required: true
          }
     },
     {
          timestamps: true
     }
)

const bicycleLocationModel = model("BicycleLocation", bicycleLocationSchema);

export { bicycleLocationModel };
