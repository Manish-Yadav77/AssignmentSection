const { it } = require('faker/lib/locales');
const fs = require('fs');
const { exit } = require('process');
const { json } = require('stream/consumers');

// 1 ● Write a Node.js script to read a file named "input.txt" asynchronously and print its
// contents to the console

// fs.readFile('input.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data); 
// })


// 2 ● Modify the script to handle errors gracefully when reading the file "input.txt"
// asynchronously

// fs.appendFile("input.txt",'\nJai Shree Krishn',(err)=>{
//     if(err)throw err;
//     console.log('file updated');
// })


// 3 ● Create a Node.js script to write "Hello, World!" to a new file named "output.txt" using
// synchronous methods.

// fs.appendFileSync("output.txt",'Hello World!');
// console.log('file writtened and created...');


// 4 ● How would you update "output.txt" to append "Goodbye, World!" at the end of the file
// using asynchronous methods?

// fs.appendFile("output.txt",'\nGoodbye, World!',(err)=>{
//     if(err)throw err;
//     console.log("that's how i can update it...");
// })


// 5 ● Write a function in Node.js to delete a file named "delete-me.txt" asynchronously and log
// a success message.

// fs.unlink("delete-me.txt",(err)=>{
//     if(err)throw err;
//     console.log("file deleted...");
// });


// 6 ● Develop a script that creates a directory called "test-dir" synchronously, and logs a
// confirmation message.


// fs.mkdirSync('test-dir');
// console.log('directory created...');


// 7 ● Write a script to read and print all file names inside a directory named "test-dir" using
// asynchronous methods.


// fs.readdir("test-dir",(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })


// 8 ● How would you modify a script to handle errors when reading a directory that does not
// exist?

// fs.readdir('NewFolder',(err,data)=>{
//     if(err) console.log("file not found or may be file doesn't exist ");
//              throw err;
//     ;
//     console.log(data);
// })


// 9 ● Create a script to rename a file from "oldname.txt" to "newname.txt" asynchronously and
// handle potential errors.

// fs.rename('oldname.txt','newname.txt',(err)=>{
//     if(err)throw err;
//     console.log('renamed');
// })


// 10 ● Write a script to get and print the file statistics for "example.txt" using asynchronous
// methods.

// fs.stat('example.txt',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })


// 11 ● Develop a script that checks if a file named "config.txt" exists using fs.existsSync
// and logs the result.


// const res = fs.existsSync('config.txt');
// console.log(res);


// 12 ● Write a Node.js function that reads a JSON file named "data.json" asynchronously and
// parses the JSON object.

// fs.readFile('data.json','utf8',(err,data)=>{
//     if(err)throw err;
// const jsonDatas = JSON.parse(data);
//     console.log(jsonDatas);
// })


// 13 ● Create a script to write an array of objects to a file named "data.json" in a pretty JSON
// format using synchronous methods.


// const data = [
//     {name:'manish'},
//     {age:21},
//     {city:'Rohtak'}
// ]
// const jsonData = JSON.stringify(data,null,2);

// fs.writeFileSync('data.json',jsonData);

// console.log('json format done..');


// 14 ● How would you append multiple lines of text to a file "log.txt" asynchronously without
// overwriting the existing content?

// fs.appendFile('log.txt','\n1st line\n2nd line',(err)=>{
//     if(err)throw err;
//     console.log("multiples data added...");
// })


// 15 ● Write a script to delete a directory named "old-dir" asynchronously, ensuring that the
// directory is empty

// fs.readdir('old-dir',(err,data)=>{
//     if(err)throw err;
//     console.log('files to delted are : ',data);

// for(let i=0;i<data.length;i++){
//     fs.unlink(`old-dir/${data[i]}`,(err)=>{
//         if(err)throw err;
//         console.log(`${files[i]} deleted...`);
//     })
// }
// console.log('all in directory files deleted...');

// fs.rmdir('old-dir',(err)=>{
//     if(err)throw err;
//     console.log('directory also deleted...');
// })
// }) 


// 16 ● Develop a script that lists all files in a directory and their file sizes using asynchronous
// methods.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err;

//     for(let i = 0 ; i<data.length;i++){

//         fs.stat(`test-dir/${data[i]}`,(err,stats)=>{
//             if(err)throw err;
//             if(stats.isFile())
//                 console.log(`${data[i]} - ${stats.size} bytes`);
//         })
//     }
// })


// 17 ● Write a Node.js script to copy the contents of "source.txt" to "destination.txt" using the fs
// module.

// fs.readFile('source.txt.txt',(err,data)=>{
//     if(err)throw err;

//     fs.appendFile('destination.txt',data,(err)=>{
//         if(err)throw err;
//         console.log('context copied from one to another file...');
//     })
// })



// 18 ● Create a script to monitor changes to a file "config.txt" and log the change time to the
// console using fs.watch.

// fs.watch('config.txt',(time)=>{
//     if(time=='change')
//     {
//         console.log("change of time is : ",new Date().toLocaleString());    
//     }
// })
// fs.appendFileSync('config.txt','\nnew world')



// 19 ● Develop a script that recursively deletes all files in a directory using asynchronous fs
// methods.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err;

//     for(let i = 0; i<data.length;i++){
//         fs.unlink(`test-dir/${data[i]}`,(err)=>{
//             if(err)throw err;
//         })
//     }
//     console.log('file deleted in a directory....');
// })


// 20 ● Write a script to create a backup of a directory by copying all its files and subdirectories
// to a new location.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err
//     data.forEach(item => {
//         fs.stat(`test-dir/${item}`,(err,sts)=>{
//             if(err)throw err
//             if(sts.isDirectory())
//             {
//                 if(!fs.existsSync('AbcFolder'))
//                 fs.mkdir('AbcFolder',{recursive:true})
//             }
//             else{
//                 if(!fs.existsSync('AbcFolder')){fs.mkdirSync('AbcFolder')}
//                 fs.copyFile(`test-dir/${item}`,`AbcFolder/${item}`,(err)=>{
//                     if(err)throw err
//                 })
//             }
//         })
//     });
//     console.log("bacup directory completed....");
// });

// completed.....
