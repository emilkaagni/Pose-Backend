import mongoose from "mongoose";

const connectDB = async () => {
    //code below might have an error because of @ in password in .env 
    mongoose.connection.on('connected', ()=>{
        console.log("Connected to MongoDB");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/pose-shop`)
}
export default connectDB;

