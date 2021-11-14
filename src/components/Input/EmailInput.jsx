import mail_black_24dp from "../../assets/mail_black_24dp.svg";

export default function EmailInput() {
  return (
    <div className="input-container">
      <img src={mail_black_24dp} alt="mail-icon" />
      <input type="email" name="email" placeholder="Email" required />
    </div>
  );
}
