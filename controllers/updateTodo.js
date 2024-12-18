// import the model 

const Todo = require("../models/Todo") ;


// define the route Handler 

exports.updateTodo = async(req, res) => {
    try {
       const{id} =     req.params ;
       const {title, description} = req.body ;

       const todo = await Todo.findByIdAndUpdate(
           {_id : id} ,
           {title, description, updatedAt: Date.now()} ,

       )

       res.status(200).json({
         success : true ,
         date: todo,
         message : `Todo ${id} data is updated Successfully` ,

       })
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