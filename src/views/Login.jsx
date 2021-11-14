import devchallenges from "../assets/devchallenges.svg";
import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";
import Social from "../components/Social/Social";

export default function Login({ changeState }) {
  return (
    <>
      <div className="auth-container">
        <a href="https://devchallenges.io">
          <img src={devchallenges} alt="devchallenges" />
        </a>
        <h3>Join thousands of learners from around the world</h3>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for your to choose.
        </p>
        <EmailInput />
        <PasswordInput />

        <button className="login-button">Login</button>
        <small>or continue with these social profile</small>

        <Social />

        <small>
          Not a member yet?
          <button className="small-button" onClick={() => changeState(true)}>
            Register
          </button>
        </small>
      </div>
    </>
  );
}
