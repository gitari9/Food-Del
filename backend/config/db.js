import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gitari:567890@cluster0.rz8ytur.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}