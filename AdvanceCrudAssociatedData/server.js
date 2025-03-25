const express= require("express");
const connectDB = require("./database");
const User = require("./Models/User");
require("dotenv").config();
const app =express();
connectDB();
app.use(express.json());

// Advanced CRUD Operations and Associated Data (25 Questions)


// 1. Create a User with Address and Nested Data

// ● Task: Create a User schema that includes an address field, which is an object
// containing street, city, and postalCode. Implement a POST route to add a user
// with a nested address object.
// Data to Insert:
// {
// "name": "John Doe",
// "email": "johndoe@example.com",
// "address": {
// "street": "123 Main St",
// "city": "New York",
// "postalCode": "10001"
// }
// }

// app.post('/register-user', async (req,res)=>{
//     try {
//         const {name,email,address:{street,city,postalCode}} = req.body;
//     const newUser = new User({name,email,address:{street,city,postalCode}})
//     await newUser.save();
//     console.log("Data inserted Succesfully")
// return res.status(200).json({message:"SuccessFully Inserted"})
//     } catch (error) {
//         console.log(error)
//     return res.status(500).json({message:"internal server error"})
//     }
// })


// 2. Implement a Multi-Step Process for Creating a User (e.g., with Profile
//     Image Upload)
//     ● Task: Set up a multi-step POST route where the user creates an account, and then
//     uploads a profile image using multer. Store the image in a profileImages folder and
//     save the file path in the database.
//     ● Data to Insert:
//     ○ User data: name, email, password.
//     ○ After registration, allow the user to upload a profile picture.



app.listen(process.env.PORT,()=>{
    console.log(`server is running on localhost: ${process.env.PORT} thank you so much `)
})