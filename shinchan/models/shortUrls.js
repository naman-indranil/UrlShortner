const mongoose =require('mongoose');

const shortId = require('shortid');


const shortUrlSchema = new mongoose.Schema({
    full:{
        type : String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:"N"
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    email: {
        type: String,
        required: true,
        default:"naman"
    }
});

module.exports=mongoose.model('ShortUrl',shortUrlSchema);