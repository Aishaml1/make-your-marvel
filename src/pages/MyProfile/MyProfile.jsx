import React, { useEffect, useState } from "react";
import * as profileService from '../../services/profileService'

const MyProfile = ({user}) => {
  const [char1, setChar1] = useState([])
  const [char2, setChar2] = useState([])
  const [char3, setChar3] = useState([])

  useEffect(() => {
    // profileService.getMyProfile()
    // .then(profile => setProfile(profile))
    const getProfile = async() => {
      const data = await profileService.getMyProfile()
      console.log("this is data in profile", data)
    }
    getProfile()
  }, [])

  return (
    <>
      <h1>This is My Profile</h1>
    </>
  )
}

export default MyProfile