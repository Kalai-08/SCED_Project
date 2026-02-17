const Todo = require('../Models/TodoModel');

const post_Item = async (req,res) =>{
    const{title,description} = req.body;

    try {
        const todo = await Todo.create({
            title,
            description
        })
        res.status(201).json("Todo Added!");
    } catch (error) {
        console.log(error);
        res.status(500).json({message :error.message});
    }
}

const get_Item = async (req,res) =>{
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :error.message});
    }
    
}

const update_Item = async (req,res) =>{
    try {
        const {title,description} = req.body;
        const id = req.params.id;

        const updateGoal = await Todo.findByIdAndUpdate(
            id,
            {title, description},
            {new : true}
        )

        res.status(201).json(updateGoal);
    } catch (error) {
        console.log(error);
        res.status(500).json({message :error.message});
    }
}

const delete_Item = async (req,res) =>{
    try {
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "Item deleted Successfully", id: deleteTodo._id})
    } catch (error) {
        console.log(error);
        res.status(500).json({message :error.message});
    }
}
module.exports = {
    post_Item,
    get_Item,
    update_Item,
    delete_Item
}