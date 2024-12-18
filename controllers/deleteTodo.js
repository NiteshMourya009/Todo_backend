
//import Todo from "../models/Todo";

const { json } = require("express");
const Todo = require("../models/Todo") ;

exports.deleteTodo = async (req, res) => {
    try {
         const {id} = req.params ;
         await Todo.findByIdAndDelete(id) ;

         res,json({
            success : true ,
            message : "Todo Deleted" ,
         })
    }
    catch (error) {
        console.log(error) ;
        res.status(500).json({
            success : false ,
            error : error.message ,
            message :"Server Error" ,

        }) ;
    }
}