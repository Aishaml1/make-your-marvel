import React, { useEffect, useState } from "react";
import CharCard from "./CharCard"
import { getMyProfile } from "../../services/profileService";
import UserCard from "../../components/misc/UserCard"
import * as characterService from '../../services/characterService'
// import QuoteCard from "./QuoteCard";

const MyProfile = () => {
  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()
  const [profileData, setProfileData] = useState()

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
    await characterService.deleteCharacter(characterId)
    if (characterId === character1._id) {
      setCharacter1(character1.filter((characters1) => characters1._id !== characterId))
    } else if (characterId === character2._id) {
      setCharacter2(character2.filter((characters2) => characters2._id !== characterId))
    } else {
      setCharacter3(character3.filter((characters3) => characters3._id !== characterId))
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
    }
    getProfile()
  }, [])


  return (
    <>
      {profileData &&
        <UserCard profileData={profileData} />
      }

      {character1 &&
        <CharCard character={character1} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter}/>
      }

      {character2 &&
        <CharCard character={character2} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter} />
      }

      {character3 &&
        <CharCard character={character3} updateCharacter={updateCharacter} handleDeleteCharacter={handleDeleteCharacter}/>
      }

    </>
  )
}

export default MyProfile


