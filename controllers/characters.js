import { marvelApi } from '../config/api.js'
import { Character } from '../models/character.js'
import { Profile } from '../models/profile.js'

function search(req, res) {
  marvelApi.get(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=f5fd89757a7f10387ce423f3f28c64df&hash=aaef7f942c150ae767af53eb559c9708&name=${req.query.name}`)
    .then(character => res.json(character.data.data.results[0]))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

const addToTeam = async (req, res) => {
  try {
    req.body.added_by = req.user.profile
    const newChar = await new Character(req.body)
    await newChar.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { team: newChar } }
    )
    return res.status(201).json(newChar)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const newChar = await Character.findById(req.params.id)
      .populate('added_by')
      .populate('quotes.content')
    return res.status(200).json(newChar)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createQuote = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id)
    character.quotes.push(req.body)
    await character.save()
    const newQuote = character.quotes[character.quotes.length - 1]
    return res.status(201).json(character)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteQuote = async (req, res) => {
  try {
    const quote = await Character.findById(req.params.id)
    quote.quotes.remove({ _id: req.params.quoteId })

    await quote.save()
    return res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteCharacter = async (req, res) => {
  try {
    await Character.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.team.remove({ _id: req.params.id })
    await profile.save()
    return res.status(204).end()
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateQuote = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id)
    const idx = character.quotes.findIndex((quote) => quote._id.equals(req.params.quoteId))
    character.quotes[idx].content = req.body.content
    console.log("content here", req.body.content)
    await character.save()
    return res.status(200).json(character)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

export {
  search,
  addToTeam,
  show,
  createQuote,
  deleteCharacter as delete,
  deleteQuote,
  updateQuote,
}