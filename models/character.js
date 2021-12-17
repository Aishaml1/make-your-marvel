import mongoose from "mongoose"

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  content: {type: String},
})

const characterSchema = new Schema({
  name: {type: String},
  thumbnail: {type: String},
  description: {type: String},
  quotes: [quoteSchema],
})

const Character = mongoose.model("Character", characterSchema)

export {
  Character
}