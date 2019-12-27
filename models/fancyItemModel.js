const mongoose = require('mongoose');

const fancyItemSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "Please enter fancyItem's first name"]
    },
    lastName:{
        type:String
    },
    genre:{
        type:String,
        enum:['guidingLights',
              'luminaries',
              'mavericScientists',
              'menOfLetters',
              'theGrandPhilosophers',
              'architectsOfTheFuture'],
        required:true
    },
    notableWork:{
        type:String,
        required:[true,"Please enter notable work"]
    },
    quotes:[
        {
            quote :{
                type:String,
                unique:true
            }
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
    ],
    courses:[
        {
            name:{
                type:String
            },
            courseURL: {
                type:String
            },
            platform :{
                type:String
            }
        }
    ]

});

const FancyItem = mongoose.model('FancyItem',fancyItemSchema);

module.exports = FancyItem;