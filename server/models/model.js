const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name : {
        type: String,
        require: [true,"Name content is required!"],
        minlength:[3, "Name must be at least 3 characters in length"]
    }, 
    type : {
        type: String,
        require : [true,"Position is required"],
        minlength:[3, "Name must be at least 3 characters in length"]
    }, 
    description : {
        type: String,
        require : [true,"Position is required"],
        minlength:[3, "Name must be at least 3 characters in length"]
    }, 
    skill1 : {
        type: String,
    }, 
    skill2 : {
        type: String,
    }, 
    skill3 : {
        type: String,
    },
    likes : {
        type:Number,
        default:0
    }

});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
