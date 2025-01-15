//Imports
const http = require('http');
const data = require('./data');
const fs = require('fs');
const path = require('path')
const express = require('express');
const ageFilter = require('./middleware');
const route = express.Router();


//Server
// http.createServer((req, res) => {
// res.writeHead(200, { 'content-Type': 'application/json' });
// res.write(JSON.stringify(data))
// res.end()
// }).listen(3000);

//File System & Get input from conole & create and delete file from console command
// const input = process.argv;
// const oper = input[2];
// const fname = input[3]+'.txt';
// const fdata = input[4];
// if( oper == 'add' ) {
//     fs.writeFileSync(fname,fdata);
// }else if (oper == 'rem') {
//     fs.unlinkSync(fname);
// }else {
//     console.log('invalid input');
// }

// Create bulk files using for loop & use path module to get all files name list & Use forEach loop to view individual list items
// const dirPath = path.join(__dirname, 'files');
// for(i=0;i<5;i++) {
//     // var fileName = `${dirPath}/File_${i}.txt`;
//     // var fileData = `This is File # ${i}`; 
//     // fs.writeFileSync(fileName, fileData);
// }
// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((item)=>console.log(item))
// })

// Read a File from a specific directory & Update & Rename
// var filePath = path.join(__dirname, 'files/File_2.txt');
// fs.readFile(filePath, 'utf8', (err, data)=>console.log(data))
// fs.appendFile(filePath, ` and path is ${filePath}`, (err)=>{
//     if(!err) {
//     console.warn(`${filePath} Updated`)
// }
// });
// fs.rename(filePath, 'files/File_02.txt', (err) => {
//     if (!err) {
//         console.warn(`${filePath} Name Updated`)
//     }
// })
// fs.unlinkSync(filePath);

// Example of Asynchronous Execution of Node.js
// console.log("Task 1 Completed");
// setTimeout(()=>console.log("Task 2 Completed"), 2000);
// console.log("Task 3 Completed");

// Draw Back Example of Async 
// let a = 10;
// let b = 0;
// setTimeout(()=>{b=30}, 2000);
// console.log(a+b)

// promises; The solution of async programming draw back
// let a = 10;
// let b = 0;
// let waitData = new Promise((res, rej)=> {
//     setTimeout(()=> {
//         b=30;
//         res(b);
//     }, 2000);
// }) 
// waitData.then((b)=> {
//     console.log(a+b);
// })

// // Starting Express JS
// const app = express();
// app.set('view engine', 'ejs');

// const pubDir = path.join(__dirname, 'public')
// // app.use(express.static(pubDir));

// route.use(ageFilter);
// //Routes
// app.get('', (req, res) => {
//     res.render('index')
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${pubDir}/about.html`)
// })
// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Aqib',
//         email: 'work@getMaxListeners.com'
//     }
//     res.render('profile', { user })
// })
// route.get('/login', (req, res) => {
//     res.render('login')
// })
// app.use('/', route);

// app.get('*', (req, res) => {
//     res.sendFile(`${pubDir}/404.html`)
// })
// app.listen(3030);

// // Starting MongoDB
// const dbConnect = require('./dbConnect');
// // const main = ()=> {
// //     dbConnect().then((res)=> {
// //         res.find({name:'qari Hassan'}).toArray().then((res) => {
// //             console.log(res)
// //         })
// //     })
// // }
// // main();
// const main = async ()=> {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();

const dbConnect = require('./dbConnect');
const { name } = require('ejs');

const inn = async () => {
    const db = await dbConnect();
    // console.log(db);
    const insert1 = await db.insertMany([
        
            {
                id: '12',
                name: 'newdata',
                email: 'newemail'
            },

            {
                id: '14',
                name: 'newdata',
                email: 'newemail'
            }]
        
    );
    console.log(insert1);
}
inn();