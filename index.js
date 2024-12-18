
const express = require("express") ;
const app = express() ;

//  load config form evv  file 
require("dotenv").config() ;

const PORT = process.env.PORT || 4000 

// middleware to parse json request body 
app.use(express.json()) ;

// import routes from TODO API 
const todoRoutes = require("./routes/todos");

// mount the todo ASPI ROute 
app.use("/api/v1", todoRoutes);

app.listen(PORT , () => {
    console.log(`server started successfully at ${PORT}`) ;
})

//connect to the database 
const dbConnect = require("./config/database") ;
dbConnect() ;

// Default server 
app.get("/" , (req, res) => {
    res.send(`<h1> This is HOMEPAGE Baby`) ;
})


