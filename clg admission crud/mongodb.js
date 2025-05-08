const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; 
const database = 'college';  
const collection = 'admissions';

const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect();
    const db = result.db(database);
    return db.collection('admissions');
};

module.exports = dbConnect;
