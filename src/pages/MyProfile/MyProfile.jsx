import React, { useEffect, useState } from "react";
import * as profileService from '../../services/profileService'
import CharCard from "./CharCard"
import { getMyProfile } from "../../services/profileService";

const MyProfile = ({user}) => {
  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()

  useEffect(() => {
    const getProfile = async() => {
      const data = await profileService.getMyProfile()
      console.log("this is data in profile", data.team)
      setCharacter1(data.team[0])
      setCharacter2(data.team[1])
      setCharacter3(data.team[2])
    }
    getProfile()
  }, [])
  console.log("this is character1", character1)
  return (
    <>
      <h1>This is My Profile</h1>
      { character1 &&
      <CharCard character={character1} />
      }

      { character2 &&
      <CharCard character={character2} />
      }
      
      { character3 &&
      <CharCard character={character3} />
      }
    </>
  )
}

export default MyProfile