const mongoose = require('mongoose')
const {Schema} = mongoose

const CommentSchema = new mongoose.Schema({
    userName : {
        type : String
    },
    date : {
        type : String
    },
    commentContent : {
        type : String
    }
})

const BlogSchema = new mongoose.Schema({
    blogContent : {
        type : String,
    },
    blogTitle : {
        type : String
    },
    numberOfLikes : {
        type : Number,
        default : 0,
    },
    comments : [CommentSchema],
    isPublished : {
        type : Boolean,
        default : false,
    },
    date : {
        type: String,
        default : Date.now,
    },
    blogImage : {
        type : String,
    },
})

const Blog = mongoose.model('blog', BlogSchema)

const UserSchema = new mongoose.Schema({
    fullName : {
        type : String,
    },
    userName : {
        type : String,
        unique : true,
    },
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String
    },
    blogs : [
        { 
            type: Schema.Types.ObjectId, ref : 'blog'
        }
    ],
    year : {
        type : Number,
        default : 0,
    },
    department : {
        type : String,
        default : "",
    },
    isMember : {
        type : Boolean,
        default : false,
    },
    displayPicture : {
        type : String,
        default : "",
    },
    role : {
        type : String,
        enum : ['user', 'member', 'admin'],
        default : 'user',
    }
})

module.exports = User = mongoose.model('user', UserSchema)