import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import Animation from '../../components/misc/Animation'
import ironMan from '../../assets/animation/IronMan.json'

const Signup = (props) => {

  return (
    <main>
      <h1 className={styles.signup} >Sign Up</h1>
        <div className={styles.container} >
            <Animation animData={ironMan} />
            <SignupForm {...props} />
        </div>
    </main>
  )
}

export default Signup
