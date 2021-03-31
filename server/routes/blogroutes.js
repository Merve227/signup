import express from  'express';
import blogController from'../Controller/blogController';
import {verifyAuth} from'../middleware/Authverification';


const blogRoute=  express.Router();
blogRoute.post('/create',verifyAuth ,blogController.createBlog);
blogRoute.get('/auth/blog/post', verifyAuth ,blogController.getAllBlog);
blogRoute.post(verifyAuth, blogController);
export default blogRoute;