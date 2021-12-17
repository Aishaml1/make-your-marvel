import mongoose from "mongoose"

const Schema = mongoose.Schema

const comicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
})

const Comic = mongoose.model("Comic", comicSchema)

export {
  Comic
}