import express from 'express'
import mongoose from 'mongoose'
import Post from '../db/posts.js'

const router = express.Router()

//localhost:5000/

router.get('/', async (req,res)=> {
try {
    const allPosts = await Post.find(); 
    res.json(allPosts)   
} catch (error) {
    console.log(error);
}

   
})

router.get('/:id', async (req,res)=> {
    res.json({message:'bu bir getById isteği'})
})


router.post('/', async (req,res)=> {
try {
     const post =req.body
     const createdPost = await Post.create(post)
     res.status(201).json(createdPost)
    
} catch (error) {
    console.log(error)
}

   
})

router.put('/:id', async (req,res)=> {
    res.json({message:'bu bir update isteği'})
})


router.delete('/:id', async (req,res)=> {
    res.json({message:'bu bir delete isteği'})
})
export default router;