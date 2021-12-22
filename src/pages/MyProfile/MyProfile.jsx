import React, { useEffect, useState } from "react";
import CharCard from "./CharCard"
import { getMyProfile } from "../../services/profileService";
import UserCard from "../../components/misc/UserCard"
import * as characterService from '../../services/characterService'

  const MyProfile = () => {
  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()
  const [profileData, setProfileData] = useState()
  const  [comics, setComics] = useState([]) 

  console.log('is this the comics' , comics)

  const updateCharacter = (updatedChar, id) => {

    if (id === character1._id) {
      setCharacter1(updatedChar)
    } else if (id === character2._id) {
      setCharacter2(updatedChar)
    } else {
      setCharacter3(updatedChar)
    }
  }


  const handleDeleteCharacter = async (characterId) => {
    console.log("this is characterId", characterId)
    await characterService.deleteCharacter(characterId)
    if (character1 && characterId === character1._id) {
      setCharacter1(null)
    } else if (character2 && characterId === character2._id) {
      setCharacter2(null)
    } else if (character3 && characterId === character3._id) {
      setCharacter3(null)
    } else {
      console.log("no character")
    }
  }


  useEffect(() => {
    const getProfile = async () => {
      const data = await getMyProfile()
      console.log("this is data in profile", data)
      setCharacter1(data.team[0])
      setCharacter2(data.team[1])
      setCharacter3(data.team[2])
      setProfileData(data)
      setComics(data.comics)
    }
    getProfile()
  }, [])



  return (
    <>
      {profileData &&
        <UserCard profileData={profileData} />
      }

      {character1 &&
        <CharCard character={character1} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
      }

      {character2 &&
        <CharCard character={character2} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
      }

      {character3 &&
        <CharCard character={character3} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
      }
      <div>
        <h3>My Comics</h3>
        {comics.map((comic)=>(
          <div key={comic._id}>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='comics'/>
            <p>{comic.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default MyProfile


