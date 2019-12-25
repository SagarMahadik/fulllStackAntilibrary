const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A genre mus have a name']
    },
    details:{
        type:String,
        required:[true,'Please enter genre details']
    }
});

const Genre = mongoose.model('Genre',genreSchema);
module.exports = Genre;