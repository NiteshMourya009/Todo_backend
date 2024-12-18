const mongoose = require("mongoose") ;

require("dotenv").config() ;

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
    })  
    .then( () => console.log("Db ka Connection is Succesfull")) 
    .catch( (error) => {
        console.log("Issue in DB Connection") ;
        console.error(error.message) ;

        // it means when our database connetion will fail then terminates the process 
       //  because without db connection our application lead to  unexpected behaviour our extra error ;
        process.exit(1) ;
    }) ;
} ;

module.exports = dbConnect ;

