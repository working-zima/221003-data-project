import cors from "cors";
import express from "express";
import path from "path";

import { errorMiddleware } from "./middlewares/errorMiddleware";

import { userAuthRouter } from "./routes/userRouter";
import { reviewRouter } from "./routes/reviewRouter";
import { bicycleLocationRouter } from "./routes/bicycleLocationRouter";
import { likeRouter } from "./routes/likeRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/users", userAuthRouter);
app.use("/reviews", reviewRouter);
app.use("/datas", bicycleLocationRouter);
app.use("/datas/bicycle/location/likes", likeRouter);

app.get("/", (req, res) => {
    res.send("기본적인 페이지 접속을 하셨습니다. 파이팅!");
});

app.use(errorMiddleware);

export { app };
