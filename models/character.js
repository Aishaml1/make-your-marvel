import mongoose from "mongoose"

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  content: {
    type: String,
  },
})

const characterSchema = new Schema({
  name: {
    type: String,
  },
  thumbnail:{ path: {type: String,},extension: {type: String,}},
  description: {
    type: String,
  },
  quotes: [quoteSchema],
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
})

const Character = mongoose.model("Character", characterSchema)

export {
  Character
}