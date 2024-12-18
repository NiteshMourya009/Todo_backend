// import the model 
const Todo = require("../models/Todo") ;

exports.getTodo = async (req, res) => {
    try {
        // fetch all todo item from database
        const todos = await Todo.find({}) ;

        // response 
        res.status(200).json({
            success : true ,
            data : todos, 
            message :" Entire Todo Data is required",
        }); 

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success : false ,
            error : error.message, 
            message : "Server Error",
        });
    }
}

exports.getTodoById = async(res, req) => {
    try {
        // extract todo item bases by Id 
        const id = req.params.id ;
        const todo = await Todo.findById( {_id : id})

        if(!todo) {
            return res.status(404).json({
                success : false ,
                message : "No Data Found with given id",
            })
        }

        res.status(200).json({
            success : true ,
            data : todo ,
            message : `Todo ${id} data is successfully fetched`
        })
    } 
    catch (error) {
        console.log(error) ;
        res.status(500).json({
            success : false ,
            error : error.message ,
            message : "Server Error" ,

        });
    }
}