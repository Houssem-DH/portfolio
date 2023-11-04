import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: {
        type: String ,
       
    },
    body: {
        type: String ,
       
        
    },
    





    
})

const Post = mongoose.models.posts || mongoose.model("posts", userSchema);

export default Post ;