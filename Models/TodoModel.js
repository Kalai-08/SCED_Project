const mongoose = require('mongoose');

const Todo_Schema = mongoose.Schema({
    title:{ 
        type: String,
        required : true,
    },
    description: String
},{
    timestamps : true
}
)

module.exports = mongoose.model("Todo",Todo_Schema);