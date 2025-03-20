console.log("hello world");

// require("mongodb")

const url = "mongodb+srv://wwwmanishboss969:VDSrsQdYzU54QYsO@cluster0.0jovk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const {MongoClient} = require("mongodb");
const Client = new MongoClient(url);
const dbName = "Students"
      // [  here i created a new collection name students  ]

async function main() {
    try {
        await Client.connect();
        console.log("mongodb connect successfully...");
        // console.log(module.exports)       
        const db = Client.db(dbName);
        const StudentCollection = db.collection("users");

        await StudentCollection.createIndex({email:1},{unique:true});


        // Crud Operations

//         Create (Insert) Operations:
// 1. Ek students collection banao jisme name, age, aur course fields ho. Fir ek student ka data insert karo.


// const SingleStudent = await StudentCollection.insertOne({_id:14,age:18,course:"backend Development",email:"unknown45@gmail.com", address:"Rohtak",fees:5000});

// console.log("single Student data is added Successfully", SingleStudent);


// 2. Multiple students ka data ek sath insert karo.

// const MultipleStudent = await StudentCollection.insertMany([
//     {_id:2,name:'Rahul',age:19,course:"web Development",email:"rahul3@gmail.com",address:"Rohtak",fees:5000},
//     {_id:3,name:'venus',age:20,course:"app Development",email:"venus23@gmail.com",address:"Rohtak",fees:5000},
//     {_id:4,name:'aryan',age:22,course:"ethical hacking",email:"aryan123@gmail.com",address:"Rohtak",fees:5000},
//     {_id:5,name:'sumit',age:24,course:"Machine Learning",email:"sumit@gmail.com",fees:5000},
//     {_id:6,name:'Tamanna',age:20,course:"full stack web Development",email:"rahul123@gmail.com",address:"Delhi",fees:5000},
//     {_id:7,name:'nisha',age:19,course:"web Development",email:"nisha53@gmail.com",address:"Delhi",fees:5000},
//     {_id:8,name:'nishtha',age:18,course:"web Development",email:"nishtha5@gmail.com",fees:5000},
// ])

// console.log("multiple student data work is also done...",MultipleStudent);



// 3. Ek aise student ka data insert karo jisme optional field (e.g., address) ho, lekin kuch students ke pass yeh field na ho.


// const MultipleStudent = await StudentCollection.insertMany([
//     {_id:9,name:'nitin',age:19,course:"web Development",email:"nitin@gmail.com",address:"Bhor",fees:5000},
//     {_id:11,name:'Tushar',age:20,course:"mern stack developer",email:"Tushar44@gmail.com",fees:5000},
//     {_id:12,name:'shubham',age:22,course:"ethical hacking",email:"Shubham443@gmail.com",address:"Bhor",fees:5000},
// ])

// console.log("multiple student data work is also done...",MultipleStudent);



// 4. Ek unique index create karo jo ensure kare ki email duplicate na ho sake insert ke time.

// await StudentCollection.createIndex({email:1},{unique:true});

// console.log("unique email created");

// const uniqueStudent = await StudentCollection.insertOne({
//     _id:13,name:"anil",course:"mern course",email:"anil34@gmail.com",address:"sector 5, Rohtak",fees:500
// })
// console.log("now unique email is also worked", uniqueStudent);


// 5. Agar koi student pehle se exist karta ho, to uska data update karo nahi to naya document insert karo (upsert use karke).

// const filter = { email: "anil34@gmail.com" };
//         const update = {
//             $set: {
//                 age: 21,
//             }
//         };
//         const options = { upsert: true };

//         const result = await StudentCollection.updateOne(filter, update, options);
//         console.log("Upsert operation successfull", result);

                // [ here on first because its new data the result shown of upsertId is 10 which is also i give on _id but if i run it again then the data is already exixsts so now the upsertId is shown null ]


// Read (Find) Operations:

// 6. Sirf name aur age retrieve karo students collection se.


// const studentsData = await StudentCollection.find({}, {projection:{name:1,age:1 _id:0}}).toArray();

// console.log("students name and age is here :", studentsData);



// 7. Aise students ka data fetch karo jinki age 18 se zyada ho

// const studentsData = await StudentCollection.find({age:{$gt:20}}).toArray()

// console.log("here all above the 18 age", studentsData);

                // [ above is greater than 18 and below is smaller than 18 us $gt for greater than a specific value and $lt for smaller than a specific value...]

// const studentsData = await StudentCollection.find({age:{$lt:20}}).toArray()

// console.log("here all above the 18 age", studentsData);


// 8. Sirf un students ka naam aur course fetch karo jinke paas "MERN Stack" course hai.

// const studentData = await StudentCollection.find({course:"app Development"}, {projection:{name:1,course:1 ,_id:0}}).toArray();

// console.log("according to course the data is here : ", studentData);


// 9. Un students ka data fetch karo jinme "name" field missing hai.


// const studentData = await StudentCollection.find({name:{$exists:false}}).toArray();

// console.log("Students without name ", studentData);



// 10. Data ko descending order me sort karo based on age.


// const studentData = await StudentCollection.find().sort({age:-1}).toArray();

// console.log("Sort data according to age ", studentData);

                // [ here on descending order we use -1 in sort according to the variable like age, and 1 for ascending order , we pass the variable as a object in sort like age is passed here and for ascending and descending order we pass -1 or 1 as a value of an age ]



// Update Operations:


// 11. Kisi particular student ki age update karo jiska name "Rahul" hai.


// const updateStudent = await StudentCollection.updateOne({name:"Rahul"},{$set:{age:21}})

// console.log("students age is updated", updateStudent);



// 12. Jitne bhi students ka course "Web Development" hai un sabka course "Full Stack Development" me update karo.


// const updateStudent = await StudentCollection.updateMany({course:"web Development"},{$set:{course:"Full Stack Development"}})

// console.log("students age is updated", updateStudent);


// 13. Kisi particular student ke document me ek naya field "grade" add karo bina purana data hataye.

// const updateStudent = await StudentCollection.updateOne({name:"Rahul"}, {$set:{grade:"A"}, {upsert:true}})

// console.log("grade is also added", updateStudent);

                // [ here i learn that using only $set is used to add in simple way like any other field but if we use $addtoset it will add as an object in a grade field so by using $addtoset now grade is also an object but in set the grade is an simple field like any other field... ]

// 14. Jis student ki age 20 se kam hai, uski fees 10% increase karo.

// const updatedfee = await StudentCollection.updateMany({age:{$lt:20}},{$mul:{fees:1.10}})

// console.log("fees updated", updatedfee);


// 15. Un students ke email field ko lowercase me update karo jinme email available hai.

// const updateEmail = await StudentCollection.updateMany({email:{$exists:true}},
//       [
//         {$set:{email: { $toLower:"email"}}}   
//       ]
// )

// console.log("email also updated", updateEmail);


// Delete Operations:


// 16. Jis student ka name "Amit" hai, uska data delete karo.
                        // [ i used anil name here ]

// const deletStudent = await StudentCollection.deleteOne({name:"anil"});

// console.log("anil's data is deleted", deletStudent);




// 17. Jitne bhi students ki age 15 se kam hai unko delete karo.

// const deleteStudent = await StudentCollection.deleteMany({age:{$lt:15}})

// console.log("every students with age 15 below is deleted", deleteStudent);


// 18. Jis student me course ka field missing hai, unko delete karo.
                    // [ here i choose address field ]

// const deletStudent= await StudentCollection.deleteMany({address:{$exists:false}})
// console.log("student without addresss is deleted",deletStudent);


// 19. Saare students ko delete karo jo 5 saal pehle insert kiye gaye the.

// const fiveYearsAgo = new Date()
// fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear()-5)

// const deleteStudent = await StudentCollection.deleteMany({insertedAt:{$lt: fiveYearsAgo }});

// console.log("5 year old data of student is now deleted",deleteStudent)

// Drop Student

// 20. Puri students collection drop karo bina database delete kiye.

// const dropStudent = await StudentCollection.drop();

// console.log("student collection is dropped successfully",dropStudent);





//      [  Practicing of the Crud Operation....  ]


// Complex Query with Aggregation:

// Write a query to find the average age of students enrolled in each course. The result should include the course name and the average age of students in that course.


// const averageStudent = await StudentCollection.aggregate([
//     {
//         $group:{
//             _id:"full stack web Development",
//             averageAge:{$avg:"$age"}
//         }
//     }
// ]).toArray()

// console.log("average age of specific course is here now...", averageStudent);




    } catch (error) {
        console.log(error);
    }finally{
        await Client.close();
    }
}

main().catch(console.error);

