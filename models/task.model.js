const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String
    },

    status : {
        type : String,
        enum : {
            values : ["pending", "completed"],
            message : "'pending' or 'completed'" 
        },
        required : true
    },

    priority : { 
        type : String,
        enum : {
            values : ["low", "medium", "high"],
            message : "'low', 'medium' or 'high'"
        },
        require : true
    },

    dueDate : {
        type : Date
    },
},

{timestamps : true} );

module.exports = mongoose.model("Task", taskschema);