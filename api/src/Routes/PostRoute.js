import express from "express";
import {
    createPost,
    deletePost,
    getAllPost,
    getPost,
    getTimeLinePosts,
    likePost,
    updatePost
} from "../Controllers/PostController.js";

const router = express.Router();

router.post('/create', createPost)
router.get('/:id', getPost)
router.get('/', getAllPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimeLinePosts)

export default router;