import React, { useEffect, useState } from "react";
import CharCard from "./CharCard"
import { getMyProfile } from "../../services/profileService";
import UserCard  from "../../components/misc/UserCard"

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
  
  useEffect(() => {
    const getProfile = async() => {
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
      <h1>This is My Profile</h1>
      { character1 &&
      <CharCard character={character1} updateCharacter={updateCharacter} />
      }

      { character2 &&
      <CharCard character={character2} updateCharacter={updateCharacter} />
      }
      
      { character3 &&
      <CharCard character={character3} updateCharacter={updateCharacter} />
      }

      { profileData && 
      <UserCard profileData={profileData} />      
      }
    </>    
  )
}

export default MyProfile