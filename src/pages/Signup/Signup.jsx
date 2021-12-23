import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import Animation from '../../components/misc/Animation'
import ironMan from '../../assets/animation/IronMan.json'
import AvatarSelection from './AvatarSelection'

const Signup = (props) => {
  const [message, setMessage] = useState([''])
  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
      <h1 className={styles.signup} >Sign Up</h1>
        <div className={styles.container} >
            <Animation animData={ironMan} />
            <SignupForm {...props}
              updateMessage={updateMessage} />
        </div>
      <div className={styles.bubble} ><p className={styles.speech}>{message} </p></div>
    </main>

  )
}

export default Signup
