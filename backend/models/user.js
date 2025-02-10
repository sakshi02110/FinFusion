const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        require : true,

    },
});



user.plugin(passportLocalMongoose);


module.exports = mongoose.model("user", userSchema);