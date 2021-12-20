import { Comic } from '../models/comic'
import { Profile } from '../models/profile'
import { marvelApi } from '../config/api'


function searchComic(req, res){
  marvelApi.get(`https://gateway.marvel.com:443/v1/public/comics?characters=1009351&ts=1&apikey=f5fd89757a7f10387ce423f3f28c64df&hash=aaef7f942c150ae767af53eb559c9708`)
    .then(comic => res.json(comic.data.data.results[0]))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

const addComic = async (req, res)=> {
  try{
    req.params.id.add_by = req.user.profile 
    const newComic = await new Comic(req.params.id)
    await newComic.save()
    await Profile.updateOne(
      { _id: req.user.profil },
      { $push: {comics: newComic}}
    )
    return res.status(201).json(newComic)
  }catch(err){
    return res.status(500).json(err)
  }
}




export {
  searchComic, 
  addComic,
}
