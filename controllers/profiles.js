import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

// function getProfileById(req, res) {
//   Profile.findById(req.user.profile)
//   .populate("team")
//   .populate("comics")
//   .then(profile => res.json(profile))
//   .catch(err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
  
const getProfileById = async (req, res) => {
  try {
    const myProfile = await Profile.findById(req.user.profile)
      .populate("team")
      .populate("comics")
    return res.status(200).json(myProfile)
  } catch (err) {
    return res.status(500).json(err)
  }
}

// const postQuotes = async (req, res) => {
//   try {
//     req.body.added_by = req.user.profile
//     const newChar = await new Character(req.body)
//     console.log("chracter data here", req.body)
//     await newChar.save()
//     await Profile.updateOne(
//       { _id: req.user.profile },
//       { $push: { team: newChar } }
//     )
//     return res.status(201).json(newChar)
//   } catch (err) {
//     return res.status(500).json(err)
//   }
// }

export { index, getProfileById }


