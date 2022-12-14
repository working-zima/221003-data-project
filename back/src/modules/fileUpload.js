import path from "path";
import fs from "fs";

import { UserImage } from "../db";

export const uploadFile = async (userId, files, fileLocation) => {
    const originalFilename = files.userFile.originalFilename;
    const extension = path.extname(originalFilename);
    let imageFilename;
    let fileName;

    if(originalFilename.split(".").length > 2) {
        const name = originalFilename.split(".");

        for(let i = 0; i < name.length-1; i++) {
            fileName += name[i];
        }
    } else {
        fileName = originalFilename.split(".")[0];
    }

    fileName = fileName + "-" + Date.now() + extension;

    const oldPath = files.userFile.filepath;

    const newPath = __dirname + `/../uploads/${fileLocation}/` + fileName;
    
    if(fileLocation === "userImages") {
        const currentUserImageInfo = await UserImage.findById(userId);
    
        if(currentUserImageInfo) {
            // DB에 이미가 있으면 업데이트
            const fieldToUpdate = "image";
            const newValue = fileName;
            const updatedUserImage = await UserImage.update(userId, fieldToUpdate, newValue);
            
            imageFilename = `uploads/${fileLocation}/` + updatedUserImage.image;

            fs.unlink(`src/uploads/${fileLocation}/${currentUserImageInfo.image}`, (err) => {
                if(err) throw new Error("이미지 삭제 실패");
            })

            fs.rename(oldPath, newPath, (err) => {
                if(err) throw new Error("이미지 업로드 실패");
            });
        } else {
            // DB에 저장된 이미지가 없으면 생성
            const createUserImage = await UserImage.create(userId, fileName);

            if(!createUserImage) throw new Error("DB에 이미지 생성 실패");

            fs.rename(oldPath, newPath, async (err) => {
                if(err) throw new Error("이미지 업로드 실패");
            });

            imageFilename = `uploads/${fileLocation}/` + createUserImage.image;
        }
    }
    
    return imageFilename;
}

export const deleteFile = async (fileLocation, imageFile) => {
    fs.unlink(`src/uploads/${fileLocation}/${imageFile}`, (err) => {
        if(err) throw new Error("이미지 삭제 실패");
    });
} 
