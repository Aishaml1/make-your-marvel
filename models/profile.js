import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: {type: String},
  avatar: {type: String},
  team: [{type: mongoose.Schema.Types.ObjectId, ref: "Character"}],
  comics: [{type: mongoose.Schema.Types.ObjectId, ref: "Comic"}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
