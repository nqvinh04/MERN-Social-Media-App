import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";


//Create new Post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);
    console.log("đã vào back-end, tạo new post", newPost)
    try{
        await newPost.save();
        res.status(200).json(newPost);
    }catch (error){
        res.status(500).json(error);
    }
};

//Get All Post
export const getAllPost = async (req, res) => {
    try{
        const allPost = await PostModel.find();
        res.status(200).json(allPost);
    }catch (e) {
        res.status(500).json(e);
    }
};

//Get a Post
export const getPost = async (req, res) => {
    const id = req.params.id;
    try{
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    }catch (e) {
        res.status(500).json(e);
    }
};

// Update a post
export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;
    try{
        const post = await PostModel.findById(postId);
        if(post.userId === userId){
            await post.updateOne({
                $set: req.body
            })
            res.status(200).json("Post Updated")
        }else{
            res.status(403).json("Action forbidden")
        }

    }catch (e) {
        res.status(500).json(e);
    }
};

//Delete a post
export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;
    try{
        const post = await PostModel.findById(postId);
        if(post.userId === userId){
            await post.deleteOne();
            res.status(200).json("Post deleted successfully");
        }
    } catch (e) {
        res.status(500).json(e);
    }
}

// Like/dislike a post
export const likePost = async (req, res) => {
    const id = req.params.id;
    const {userId} = req.body;

    try{
        const post = await PostModel.findById(id);
        if(post.likes.includes(userId)){
            await post.updateOne({
                $pull: {likes: userId}
            })
            res.status(200).json("Post Unliked successfully")
        }else{
            await post.updateOne({
                $push: {likes: userId}
            })
            res.status(200).json("Post liked successfully")
        }

    } catch (e) {
        res.status(500).json(e);
    }
};

//Get TimeLine Posts
export const getTimeLinePosts = async (req, res) => {
    const userId = req.params.id;

    try{
        const currentUserPosts = await PostModel.find({userId: userId});
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },{
                $lookup: {
                    from: "post",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },{
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])
        res.status(200).json(currentUserPosts
            .concat(...followingPosts[0].followingPosts)
            .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }))
    } catch (e) {
        res.status(500).json(e);
    }
}
