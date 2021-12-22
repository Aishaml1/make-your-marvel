import React from 'react'
import '../../styles/AvatarSelection.css'

//Assets 

import hulk from '../../assets/avatars/hulk.png'
import ironMan from '../../assets/avatars/ironman.png'
import gamora from '../../assets/avatars/gamora.png'
import thor from '../../assets/avatars/thor.png'


const AvatarSelection = (props) => {

  return (
    <div className="popup-container">
      <div className="popup-menu">
        <div className="popup-header">
          <h3>Select Your Avatar</h3>
          <button id="close-button" onClick={props.handlePopup}>X</button>
        </div>
        <img src={props.formData.avatar} alt="animal-avatar"></img>
        <div className="bottom-ui">
          <select onChange={(e) => props.handleChange(e)} name="avatar" value={props.formData.avatar}>
            <option value={hulk}>Hulk</option>
            <option value={ironMan}>IronMan</option>
            <option value={thor}>Thor</option>
            <option value={gamora}>Gamora</option>
          </select>
          <button onClick={props.handlePopup} type="button">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default AvatarSelection