import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => {
  console.log('UserCard:', props.profileData.avatar)
  return (
    <div className="user-card">
      <img src={props.profileData.avatar} alt="user animal avatar" />
      <div className="user-info">
        <h4>
          I am {props.profileData.name}
        </h4>
      </div>
    </div>
  )
}

export default UserCard