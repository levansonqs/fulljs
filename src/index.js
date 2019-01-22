// index.js
const mongoose = require('mongoose');
const express = require('express');

// DEFINE VARIABLE
const port = process.env.PORT;
const uri = process.env.MONGO_URL;

// Define test model
const Test = mongoose.model(
    'Test',
    new mongoose.Schema({}, { timestamps: true })
);

// Connect to db
mongoose.connect(uri,  { useNewUrlParser: true, keepAlive: 1 });

// Define express server
const app = express();

app.get('/list', async (req, res) => {
    const tests = await Test.find({}).exec();
    return res.json(tests);
});

app.get('/create', async (req, res) => {
    const test = new Test();
    const savedTest = await test.save();
    return res.json(savedTest);
});

// listen to requests
app.listen(port, () => console.info(`server started on port ${port}`));