const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const nodedb = 'nodedb';
const client = new MongoClient(url);


async function dbConnect() {
    const result = await client.connect();
    const db = result.db(nodedb)
    const collection = db.collection('products')
    // let data = await collection.find({name:'qari Hassan'}).toArray();
    return collection;
}

// async function dbConnect2() {
//     let data = await dbConnect2();
//     return data;
// }

module.exports = dbConnect;