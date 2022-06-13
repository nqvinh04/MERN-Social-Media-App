import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";


//Create new Post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)

    try{
        await newPost.save();
        res.status(200).json("Post created!");
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
