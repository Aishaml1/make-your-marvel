import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import '../../styles/Profiles.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1 className='profiles'>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <p  className='name' key={profile._id}>{profile.name}</p>
          )}
        </>
      :
        <p  className='noProfilesYet'>No profiles yet</p>
      }
    </>
  )
}

export default Profiles