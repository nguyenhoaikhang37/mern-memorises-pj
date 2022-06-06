import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find({});
        res.status(200).json({
            success: true,
            posts
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const createPost = async (req, res) => {
    try {
        const postData = req.body;
        const post = new PostMessage(postData);
        const newPost = await post.save()

        res.status(201).json({
            success: true,
            post: newPost
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const postData = req.body;

        if (!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).json({
            success: false,
            message: 'No post with that id'
        })

        const updatedPost = await PostMessage.findByIdAndUpdate(postId, postData, {new: true, runValidators: true});
        res.status(200).json({
            success: true,
            post: updatedPost
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).json({
            success: false,
            message: 'No post with that id'
        })

        await PostMessage.findByIdAndRemove(postId);
        res.json({
            success: true,
            message: 'Post deleted successfully!'
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

export {getPosts, createPost, updatePost, deletePost}