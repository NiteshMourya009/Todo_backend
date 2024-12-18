// import the model 

const Todo = require("../models/Todo") ;
const dbConnect = require("../config/database");

// define the route Handler 

exports.createTodo = async(req, res) => {
    try {
         // extract title and description from body 
        const {title, description} = req.body ; 
        // create a new Todo Obj and insert in Db 
        const response = await Todo.create({title, description}) ;

        // Send a json response with a success flag 
        res.status(200).json(
            {  
               success : true ,
               data : response ,
               message : "Entry Created Successfully"
            }
        );
    } 
    catch (error) {
        console.error(error) ;
        console.log(error) ;
        res.status(500)
        .json({
            success : false ,
            data : "Internal server error" ,
            message : error.message ,
        })
    }

}

// module.exports = dbConnect ;