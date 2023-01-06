const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SessionSchema = new Schema({
    sessionType : {
        type : String,
        enum : ['Offline', "Online"],
    },
    date : {
        type : String,
        default : Date.now,
    },
    presidedOverBy : {
        type : String,
    },
    sessionTag : {
        type : String,
    },
    sessionFocus : {
        type : String,
    },
    description : {
        type : String,
    },
    writtenBy : {
        type : Schema.Types.ObjectId,
        ref : "user"
    },
})

module.exports = Session = mongoose.model('sessions', SessionSchema)
