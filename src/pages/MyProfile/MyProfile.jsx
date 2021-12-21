import React, { useEffect, useState } from "react";
import * as profileService from '../../services/profileService'
import CharCard from "./CharCard"
import { getMyProfile } from "../../services/profileService";
import { useNavigate } from "react-router-dom";
import { addQuoteToProfile } from "../../services/characterService";

const MyProfile = ({user}) => {
  const navigate = useNavigate()
  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()
  const [content, setContent] = useState("")

  const formData = {
    content: content,
  }

  const addQuote = async() => {
    try {
      const newQuote = await addQuoteToProfile(formData)
      console.log("this is newQuote", newQuote)
      navigate('/')
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const getProfile = async() => {
      const data = await profileService.getMyProfile()
      console.log("this is data in profile", data)
      setCharacter1(data.team[0])
      setCharacter2(data.team[1])
      setCharacter3(data.team[2])
    }
    getProfile()
  }, [])

  return (
    <>
      <h1>This is My Profile</h1>
      { character1 &&
      <CharCard character={character1} addQuote={addQuote} />
      }

      { character2 &&
      <CharCard character={character2} addQuote={addQuote} />
      }
      
      { character3 &&
      <CharCard character={character3} addQuote={addQuote} />
      }
    </>
  )
}

export default MyProfile