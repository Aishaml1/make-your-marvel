import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";
import * as authService from "../../services/authService";
import AvatarSelection from "../../pages/Signup/AvatarSelection";
import hulk from "../../assets/avatars/hulk.png";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    avatar: hulk,
  });

  const [message, setMessage] = useState([''])
  const updateMessage = msg => {
    setMessage(msg)
  }

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleChange = (e) => {
    updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { name, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  };

  return (
    <>
    {popup && (
      <AvatarSelection
        formData={formData}
        handleChange={handleChange}
        handlePopup={handlePopup}
      />
    )}

    <div className="signup-page">
      
      <p>{message}</p>
      
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            autocomplete="off"
            id="avatar-button"
            type="button"
            onClick={handlePopup}
          >
            Select Avatar
          </button>
        </div>
        <div className={styles.inputContainer}>
          <button disabled={isFormInvalid()} className={styles.button}>
            Sign Up
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
