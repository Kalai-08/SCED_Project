const mongoose = require('mongoose');

const Todo_Schema = mongoose.Schema({
    title:{ 
        type: String,
        required : true,
    },

    description: {
        type :String,
        default : "",
    },
    
    deadline : {
        type : Date,
        required : true,
    },

    priority : String,
},{
    timestamps : true
}
)

module.exports = mongoose.model("Todo",Todo_Schema);