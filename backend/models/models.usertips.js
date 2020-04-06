const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usertipsSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Usertips = mongoose.model('Usertips',usertipsSchema);
module.exports = Usertips;