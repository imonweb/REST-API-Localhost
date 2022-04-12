import mongoose from "mongoose"
import Post from "../models/Post.js"

export const createPost = async (req,res) => {
  const { title, desc } = req.body  
  console.log(req.body)

    try {
      const newPost = await Post.create({ title, desc })

      res.status(201).json(newPost)
    } catch (error){
      console.log(error)
    }
  }
 

export const getPosts = async (req,res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch(error){
    res.status(404).json({
      message: error.message 
    })
  }
}

export const getPost = async (req,res) => {
  const { id } = req.params 

  try {
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch(error){
    res.status(400).json({
      message: "Post not found"
    })
  }
}

export const updatePost = async (req,res) => {
  const { id } = req.params
  const { title, desc } = req.body 
  
  if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({
      meessage: "Post not found"
    })

    const updatePost = { title, desc, _id: id }
    await Post.findByIdAndUpdate(id, updatePost, { new: true})

    res.json(updatePost)
}

export const deletePost = async (req,res) => {
  
}