const fs = require('fs');

// write Method using Synchronous

// fs.writeFileSync("Kodu Practice/02_backend/Name.txt","This is our first file created using synchronous code");

// console.log("file is created successfully");

// Asynchronous

// fs.writeFile("Kodu Practice/02_backend/new.txt","Hello thi is our second file created using synchronous code",(err)=>{
//     if(err)throw err;
//     console.log("second file is created successfully");    
// }
// )

// update Method using Synchronous

// fs.appendFileSync("Kodu Practice/02_backend/new.txt","This is our new data which is updated");
// console.log("updated success");

// Asynchronous

// fs.appendFile("Kodu Practice/02_backend/new.txt","\nthis is our newest data using asynchronous method",(err)=>{
//     if(err)throw err;
//     console.log("async done...");
// })

// Delete Method -> Sync -> unLinkSync Async -> unLink

// Synchronous Method

// fs.unlinkSync('Kodu Practice/02_backend/new.txt');
// console.log("file is deleted..");

// Asynchronous Method

// fs.unlink("Kodu Practice/02_backend/Name.txt",(err)=>{
//     if(err)throw err;
//     console.log("file is deleted now...");  
// })

//===========================================================

// directory -> read,write,update,delete
// create a directory

// Synchronous Method

// fs.mkdirSync("Kodu Practice/02_backend/NewFolder");
// console.log("folder created...");

// so when we have to basically read one directory then its purpose will be to show all file inside it.

// Asynchronous Mehtod

// fs.readdir("Kodu Practice/02_backend",(err,files)=>{
//     if(err)throw err;
//     console.log(files);
// })

// Delete a Directory

// fs.rmdir("Kodu Practice/02_backend/NewFolder",(err)=>{
//     if(err)throw err;
//     console.log("folder deleted...");
// })

// Rename a File 

// fs.rename("abc.txt",'new.txt',(err)=>{
//     if(err)throw err;
//     console.log("rename success..");
// })

// check file related stats

// fs.stat("new.txt",(err,stats)=>{
//     if(err)throw err;
//     console.log(stats);
// })

