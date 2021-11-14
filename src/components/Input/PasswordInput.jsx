import { useRef } from "react";
import lock_black_24dp from "../../assets/lock_black_24dp.svg";
import visibility_black_24dp from "../../assets/visibility_black_24dp.svg";
import visibility_off_black_24dp from "../../assets/visibility_off_black_24dp.svg";

export default function PasswordInput() {
  const passwordRef = useRef(null);
  const visibleIconRef = useRef(null);

  const handleShowPassword = () => {
    if (passwordRef.current && visibleIconRef.current) {
      if (passwordRef.current.type === "password") {
        passwordRef.current.type = "text";
        visibleIconRef.current.src = visibility_black_24dp;
      } else {
        passwordRef.current.type = "password";
        visibleIconRef.current.src = visibility_off_black_24dp;
      }
    }
  };

  return (
    <div className="input-container">
      <img src={lock_black_24dp} alt="lock-icon" />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        ref={passwordRef}
      />
      <button className="toggle-password" onClick={handleShowPassword}>
        <img
          src={visibility_off_black_24dp}
          alt="toggle-password"
          ref={visibleIconRef}
        />
      </button>
    </div>
  );
}
