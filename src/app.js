const express = require('express');
const app = express();

//require user Route here from routes folder

//middleware
app.use(express.json());

//User POST ROUTE
//Using user route example given below
//app.use('/api/user', userRoute);

module.exports = app;
