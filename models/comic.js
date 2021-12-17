import mongoose from "mongoose"

const Schema = mongoose.Schema

const comicSchema = new Schema({
  title: {type: String},
  description: {type: String},
  url: {type: String},
})

const Comic = mongoose.model("Comic", comicSchema)

export {
  Comic
}