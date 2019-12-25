const mongoose = require('mongoose');

const grandPhilosopherSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "Please enter fancyItem's first name"]
    },
    lastName:{
        type:String
    },
    notableWork:{
        type:String,
        required:[true,"Please enter notable work"]
    },
    quotes:[
        {
            type:String,
            unique:true
        }
    ],
    books:[
        {
            name:{
                
                type:String,
                unique:true
            },
            bookURL :{

                type: String
            }
        }
    ],
    videos:[
        {
            name:{
                type:String,
                maxlength:[50,"A video description must have less or equal to 50 characters"]
            },
            videoURL: {
                type:String
            }
        }
    ]
})

const GrandPhilosopher = mongoose.model('GrandPhilosopher', grandPhilosopherSchema);

module.exports = GrandPhilosopher;