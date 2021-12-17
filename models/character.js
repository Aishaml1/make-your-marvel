import mongoose from "mongoose"

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  content: {
    type: String,
    required: true
  },
})

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quotes: [quoteSchema],
})

const Character = mongoose.model("Character", characterSchema)

export {
  Character
}