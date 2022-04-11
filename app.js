import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello from Nodejs")
})
const DB_URL = "mongodb://127.0.0.1:27017/crud"

mongoose.connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, console.log(`server running on port: ${PORT}`)))
  .catch((err) => console.log(`server error: ${err}`))







