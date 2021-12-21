import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import Animation from '../../components/misc/Animation'
import ironMan from '../../assets/animation/IronMan.json'
import AvatarSelection from './AvatarSelection'

const Signup = props => {
  const [message, setMessage] = useState([''])
  const [popup, setPopup] = useState(false)
  const updateMessage = msg => {
    setMessage(msg)
  }

  const handlePopup = () => {
    setPopup(!popup)
  }


  return (
    <main>
      <div className={styles.container} >
        <h1 className={styles.signup} >Sign Up</h1>
        <SignupForm {...props}
          updateMessage={updateMessage} />
      </div>
      <div className={styles.speech}>{message}</div>
      <div className={styles.leftcontainer}>
        <Animation
          animData={ironMan} />
      </div>
      <div>
        {popup &&
        <AvatarSelection
          handlPopup={handlePopup}
        /> </div> 
      </div>
    </main>

  )
}

export default Signup
