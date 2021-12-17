'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 6000;
const detailsRoutes = require("./routes/sample");

// Database connection
const db = require('./config/config');
db.authenticate().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Error" + err);
});

app.use(cors());
app.use(express.json());

app.use('/api/v1/details', detailsRoutes);

// server connection
db.sync().then(()=>{
    app.listen(port, console.log(`listing port ${port}`));
}).catch((err)=>{
    console.log("Connection failed" + err);
});