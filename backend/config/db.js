import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://amanq7362_db_user:t2zGIYw07SUzPwni@cluster0.eoxgyth.mongodb.net/Expense")
    .then(()=>console.log("DB connected"));
}