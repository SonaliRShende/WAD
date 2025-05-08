// index.js
const dbConnect = require('./mongodb');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/admissions', async (req, res) => {
    const db = await dbConnect();
    const admissions = await db.find().toArray();
    res.send(admissions);
});

app.post('/admissions', async (req, res) => {
    const db = await dbConnect();
    const result = await db.insertOne(req.body);
    res.send({ message: 'Admission record inserted successfully', result });
});

app.put('/admissions/:studentName', async (req, res) => {
    const db = await dbConnect();
    const result = await db.updateOne(
        { studentName: req.params.studentName },
        { $set: req.body }
    );
    res.send({ message: 'Admission record updated successfully', result });
});

app.delete('/admissions/:studentName', async (req, res) => {
    const db = await dbConnect();
    const result = await db.deleteOne({ studentName: req.params.studentName });
    res.send({ message: 'Admission record deleted', result });
});

app.listen(3000, () => {
    console.log('College Admission API running at http://localhost:3000');
});
