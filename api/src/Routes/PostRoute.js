import express from "express";
import {createPost, getAllPost, getPost} from "../Controllers/PostController.js";

const router = express.Router();

router.post('/create', createPost)
router.get('/:id', getPost)
router.get('/', getAllPost)

export default router;