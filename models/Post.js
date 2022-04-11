import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 50,
    },
    desc: {
      type: String,
      required: true,
    }
  }, { timestamps: true }
)

export default mongoose.model("posts", postSchema)