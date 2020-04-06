const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("connected to mongo db database");
})

const usertips = require('./routes/routes.usertips');
const user = require('./routes/routes.user');

app.use('/usertips',usertips);
app.use('/user',user);

app.listen(port,()=>{
    console.log(`server is running at port : ${port}`);
});