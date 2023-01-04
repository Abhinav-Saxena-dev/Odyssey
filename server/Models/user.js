const mongoose = require('mongoose')

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
        type : Number
    },
    comments : [CommentSchema],
    isPublished : {
        type : Boolean,
        default : false,
    },
    date : {
        type: String,
        default : Date.now,
    }
})

const Blog = mongoose.model('blog', BlogSchema)

const ImageSchema = new mongoose.Schema({
    img: {
        data : Buffer,
        contentType: String,
    }
})

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
    },
    department : {
        type : Number,
    },
    isMember : {
        type : Boolean,
    },
    displayPicture : ImageSchema,
})

module.exports = User = mongoose.model('user', UserSchema)