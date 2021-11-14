import NameInput from "../components/Input/NameInput";
import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";

export default function Registration({ handleReg, changeState }) {
  return (
    <div className="reg-container">
      <NameInput />
      <EmailInput />
      <PasswordInput />

      <button className="reg-button" onClick={handleReg}>
        Start coding now
      </button>
      <small>
        Already a member?
        <button className="small-button" onClick={() => changeState(false)}>
          Login
        </button>
      </small>
    </div>
  );
}
